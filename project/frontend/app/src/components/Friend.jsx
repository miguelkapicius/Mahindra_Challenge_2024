import { ShootingStar } from "@phosphor-icons/react";
import CoinsValue from "./dashboard/CoinsValue";

export default function Friend({points="0", username="Username", avatar="https://i.pravatar.cc"}) {
    return (
        <article className="w-full h-16 p-4 bg-primary/5 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={avatar} alt="" className="size-8 rounded-full" />
                <span>{username}</span>
            </div>
            <CoinsValue>
                <ShootingStar size={24} className="text-primary" />
                <span>{points}</span>
            </CoinsValue>
        </article>
    );
}
