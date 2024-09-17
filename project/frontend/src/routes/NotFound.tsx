import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="h-screen flex justify-center items-center flex-col space-y-6 font-display">
            <h2 className="text-9xl tracking-widest">404</h2>
            <p className="text-3xl">Page is not found</p>
            <NavLink to={"/"}>
                <Button>Back to Home</Button>
            </NavLink>
        </section>
    );
}
