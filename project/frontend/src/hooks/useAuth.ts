import { authState } from "@/atoms/authState";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";

export function useAuth() {
    const [auth, setAuth] = useRecoilState(authState);
    const navigate = useNavigate();

    const login = async (e: any, email: string, password: string) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                password,
            });

            console.log(email)
            console.log(password)

            const { user } = response.data;

            setAuth({
                isAuthenticated: true,
                user: user,
            });

            navigate("/");
        } catch (error: any) {
            alert("Erro de login: " + error.response.data.message);
        }
    };

    const logout = () => {
        
        setAuth({
            isAuthenticated: false,
            user: null,
        });

        navigate("/login");
    };

    return {
        auth,
        setAuth,
        login,
        logout,
    };
}
