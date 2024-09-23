import api from "@/axiosInstance";
import { createContext, useEffect, useState, ReactNode, FC } from "react";
import { Navigate } from "react-router-dom";

// Defina a interface para o usuário
interface User {
    // Defina as propriedades do usuário conforme necessário
    _id: string;
    email: string;
    name: string;
    username: string;
    imageUrl: string;
    // Adicione outras propriedades conforme necessário
}

// Defina a interface para o contexto
interface AuthContextType {
    user: User | null;
    signed: boolean;
    signOut: () => void;
    signIn: (email: string, password: string) => Promise<void>;
}

// Crie um valor padrão para o contexto
const defaultContextValue: AuthContextType = {
    user: null,
    signed: false,
    signOut: () => {},
    signIn: async () => {},
};

// Crie o contexto com o valor padrão
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

    return (
        <AuthContext.Provider value={{ user, signed: !!user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
