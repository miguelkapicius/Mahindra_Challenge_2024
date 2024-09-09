import * as React from "react";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ProfileAvatar } from "../Avatar";
import { Link } from "react-router-dom";

const stats: { title: string; href: string; description: string }[] = [
    {
        title: "Teams",
        href: "/teams",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Pilots",
        href: "/pilots",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Users Leaderboard",
        href: "/users-leaderboard",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Race History",
        href: "/race-history",
        description:
            "Explore past Formula E race results, track the performance of your favorite teams and drivers, and relive the excitement of previous seasons.",
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
    return (
        <NavigationMenu>
            <NavigationMenuList>
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
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                    <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} flex gap-2`}
                    >
                        Profile
                        <ProfileAvatar />
                    </NavigationMenuLink>
                </NavigationMenuItem>
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
