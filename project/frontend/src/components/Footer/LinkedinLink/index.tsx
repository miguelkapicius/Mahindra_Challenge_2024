import { Button } from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export function LinkedinLink({
    name,
    link,
    image,
    role,
}: {
    name: string;
    link: string;
    image: string;
    role: string;
}) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="flex max-w-max items-center">
                    <LinkedInLogoIcon className="size-6" />
                    <Link target="_blank" to={link}>
                        <Button variant="link">{name}</Button>
                    </Link>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="max-w-max flex items-center justify-center">
                <Link to={link}>
                    <div className="flex space-x-4">
                        <img src={image} alt={name} className="size-12 rounded" />
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">{name}</h4>
                            <p className="text-sm">{role}</p>
                        </div>
                    </div>
                </Link>
            </HoverCardContent>
        </HoverCard>
    );
}
