import api from "@/axiosInstance";
import { createContext, useEffect, useState, ReactNode, FC } from "react";
import { Navigate } from "react-router-dom";

interface User {
    _id: string;
    email: string;
    name: string;
    username: string;
    imageUrl: string;
    banner: string;
    drivers: string[];
    friends: string[];
    points: number;
    coins: number;
}

interface AuthContextType {
    user: User | null;
    signed: boolean;
    signOut: () => void;
    signIn: (email: string, password: string) => Promise<void>;
    updateUserDrivers: (drivers: string[], price: number) => void;
    addFriend: (friendId: string) => void;
}

const defaultContextValue: AuthContextType = {
    user: null,
    signed: false,
    signOut: () => {},
    signIn: async () => {},
    updateUserDrivers: () => {},
    addFriend: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultContextValue);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const loadingStorageData = async () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storageToken = localStorage.getItem("@Auth:token");

            if (storageToken && storageUser) {
                setUser(JSON.parse(storageUser));
                api.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${storageToken}`;
            }
        };

        loadingStorageData();
    }, []);

    async function signIn(email: string, password: string) {
        const response = await api.post("/login", {
            email,
            password,
        });

        if (response.data.error) {
            return alert(response.data.error);
        }

        const userData = response.data.user;
        setUser(userData);

        const { token } = response.data;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        localStorage.setItem("@Auth:token", token);
        localStorage.setItem("@Auth:user", JSON.stringify(userData));
        <Navigate to={"/"} />;
    }

    function signOut() {
        localStorage.removeItem("@Auth:user");
        localStorage.removeItem("@Auth:token");
        setUser(null);
    }

    function updateUserDrivers(drivers: string[], price: number) {
        if (user) {
            const updatedUser = {
                ...user,
                drivers,
                coins: user.coins - price,
            };
            setUser(updatedUser);
            api.put(`/users/${user._id}`, {
                drivers: updatedUser.drivers,
                coins: updatedUser.coins,
            });
            localStorage.setItem("@Auth:user", JSON.stringify(updatedUser));
        }
    }

    function addFriend(friendId: string) {
        if (user) {
            if (user.friends.includes(friendId)) {
                return alert("This friend already in your list");
            }
            const updatedUser = {
                ...user,
                friends: [...(user?.friends || []), friendId],
            };

            setUser(updatedUser);
            api.put(`/users/${user!._id}`, {
                friends: updatedUser.friends,
            });
            api.put(`/users/${friendId}`, {
                friends: [...(user?.friends || []), user._id],
            });
            localStorage.setItem("@Auth:user", JSON.stringify(updatedUser));
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                signed: !!user,
                signIn,
                signOut,
                updateUserDrivers,
                addFriend,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
