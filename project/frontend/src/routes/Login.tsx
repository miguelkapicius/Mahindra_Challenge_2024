import api from "@/axiosInstance";
import { AuthContext } from "@/context/auth";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormEvent, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { signIn, signed } = useContext(AuthContext);

    const navigate = useNavigate();

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        await signIn(loginEmail, loginPassword);
        if (signed) {
            navigate("/");
        }
    }

    async function handleCreateUser(e: FormEvent) {
        e.preventDefault();
        const data = {
            name,
            username,
            email,
            imageUrl,
            password,
        };

        await api.post("/users", data);
        navigate("/");
    }
    return (
        <>
            {!signed ? (
                <section className="h-screen flex justify-center items-center p-4">
                    <Card className="flex gap-2 p-2 drop-shadow-xl w-full max-w-5xl h-[700px]">
                        <img
                            className="rounded-lg hidden lg:block w-1/2 object-cover"
                            draggable={false}
                            src="https://images.unsplash.com/photo-1650741683999-97d0c81522f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9ybXVsYSUyMEV8ZW58MHx8MHx8fDA%3D"
                        />
                        <Tabs defaultValue="login" className="w-full lg:w-1/2">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="create-account">
                                    Create Account
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="login" className="h-[600px]">
                                <Card className="border-0 shadow-none">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-display font-light">
                                            Login
                                        </CardTitle>
                                        <CardDescription>
                                            Please enter your email and password
                                            to login
                                        </CardDescription>
                                    </CardHeader>
                                    <form onSubmit={(e) => handleLogin(e)}>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-1">
                                                <Label htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="example@gmail.com"
                                                    autoComplete="off"
                                                    required
                                                    value={loginEmail}
                                                    onChange={(e) =>
                                                        setLoginEmail(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="password">
                                                    Password
                                                </Label>
                                                <Input
                                                    id="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    required
                                                    value={loginPassword}
                                                    onChange={(e) =>
                                                        setLoginPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                className="w-full"
                                                type="submit"
                                            >
                                                Login
                                            </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </TabsContent>
                            <TabsContent
                                value="create-account"
                                className="h-[600px]"
                            >
                                <Card className="border-0 shadow-none">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-display font-light">
                                            Create Account
                                        </CardTitle>
                                        <CardDescription>
                                            Please enter your details to create
                                            an account
                                        </CardDescription>
                                    </CardHeader>
                                    <form onSubmit={(e) => handleCreateUser(e)}>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-1">
                                                <Label htmlFor="name">
                                                    Full Name
                                                </Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    minLength={5}
                                                    placeholder="John Doe"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="example@gmail.com"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="username">
                                                    Username
                                                </Label>
                                                <Input
                                                    id="username"
                                                    type="text"
                                                    minLength={5}
                                                    placeholder="johndoe123"
                                                    value={username}
                                                    onChange={(e) =>
                                                        setUsername(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="image">
                                                    Profile Picture URL
                                                </Label>
                                                <Input
                                                    id="image"
                                                    type="text"
                                                    minLength={5}
                                                    placeholder="https://example.com/profile-picture.jpg"
                                                    value={imageUrl}
                                                    onChange={(e) =>
                                                        setImageUrl(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="password">
                                                    Password
                                                </Label>
                                                <Input
                                                    id="password"
                                                    type="password"
                                                    minLength={8}
                                                    placeholder="Min 8 characters"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <Label htmlFor="confirm-password">
                                                    Confirm Password
                                                </Label>
                                                <Input
                                                    id="confirm-password"
                                                    type="password"
                                                    minLength={8}
                                                    placeholder="Min 8 characters"
                                                    value={confirmPassword}
                                                    onChange={(e) =>
                                                        setConfirmPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                disabled={
                                                    confirmPassword !== password
                                                }
                                                className="w-full"
                                            >
                                                {confirmPassword === password
                                                    ? "Create Account"
                                                    : "Passwords do not match."}
                                            </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </Card>
                </section>
            ) : (
                <Navigate to={"/"} />
            )}
        </>
    );
}
