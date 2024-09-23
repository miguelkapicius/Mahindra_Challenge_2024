import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "@/context/auth";

export function PrivateRoutes() {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("AuthContext must be used within an AuthProvider");
    }

    const { signed } = context;

    return signed ? <Outlet /> : <Navigate to={"/login"} />;
}
