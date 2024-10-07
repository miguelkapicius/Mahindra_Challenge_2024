import * as React from "react";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { ProfileAvatar } from "../Avatar";
import { AuthContext } from "@/context/auth";
import { LogOut } from "lucide-react";
import api from "@/axiosInstance";

const stats: { title: string; href: string; description: string }[] = [
    {
        title: "Teams",
        href: "/teams",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "My Team",
        href: "/myTeam",
        description:
            "View and manage your team, track performance, and make adjustments to stay ahead in the competition.",
    },
    {
        title: "Users Leaderboard",
        href: "/users-leaderboard",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Sustainability in Motion",
        href: "/sustainability-in-motion",
        description:
            "Discover how Formula E is leading the charge in sustainable motorsport. From cutting-edge electric technology to eco-friendly initiatives, join a global movement committed to a greener future. Follow the races and be part of the solution!",
    },
    {
        title: "Friends & Rivals",
        href: "/friends-rivals",
        description:
            "Connect with your friends, create leagues, and compete in the Fantasy Game. Track your progress, challenge rivals, and see who comes out on top in the ultimate Formula E fan competition!",
    },
];

export function Navbar() {
    const { user, signOut } = React.useContext(AuthContext);

    const [name, setName] = React.useState(user?.name);
    const [username, setUsername] = React.useState(user?.username);
    const [imageUrl, setImageUrl] = React.useState(user?.imageUrl);

    function updateUser() {
        api.put(`/users/${user?._id}`, {
            name,
            username,
            imageUrl,
        });
    }

    return (
        <NavigationMenu className="z-30">
            <NavigationMenuList className="">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Races</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <div
                                        id="bg-navbar"
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none bg-cover bg-center focus:shadow-md"
                                    >
                                        <div className="bg-accent/80 p-4 rounded">
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                E-Pit
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Explore all the latest details
                                                about Formula E, including team
                                                standings, race results, and
                                                driver stats.
                                            </p>
                                        </div>
                                    </div>
                                </NavigationMenuLink>
                            </li>
                            <ListItem to="/" title="Real Time Racing">
                                Follow live Formula E races with real-time
                                updates.
                            </ListItem>
                            <ListItem to="/fantasy" title="Fantasy Game">
                                Build your own Formula E team and compete with
                                other fans in our Fantasy Game.
                            </ListItem>
                            <ListItem to="/community" title="Community">
                                Join the Formula E community to connect with
                                fellow fans.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Stats</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {stats.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    to={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant={"ghost"}
                                className="flex gap-4 items-center"
                            >
                                <span>{user?.username}</span>
                                <ProfileAvatar image_url={user?.imageUrl} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Edit Profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click
                                    save when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                        htmlFor="name"
                                        className="text-right"
                                    >
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        value={name}
                                        className="col-span-3"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                        htmlFor="username"
                                        className="text-right"
                                    >
                                        Username
                                    </Label>
                                    <Input
                                        id="username"
                                        value={username}
                                        className="col-span-3"
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label
                                        htmlFor="image"
                                        className="text-right"
                                    >
                                        Image URL
                                    </Label>
                                    <Input
                                        id="image"
                                        value={imageUrl}
                                        className="col-span-3"
                                        onChange={(e) =>
                                            setImageUrl(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button
                                        type="submit"
                                        onClick={() => updateUser()}
                                    >
                                        Save changes
                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </NavigationMenuItem>
                <Button
                    className="flex gap-2"
                    variant={"ghost"}
                    size={"icon"}
                    onClick={() => signOut()}
                >
                    <LogOut className="size-5" />
                </Button>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<typeof Link>,
    React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
