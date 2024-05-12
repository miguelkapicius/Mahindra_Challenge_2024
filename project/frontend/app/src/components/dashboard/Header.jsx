import { Coins, SketchLogo, Diamond, UserCircle } from "@phosphor-icons/react";
import CoinsValue from "./CoinsValue";

export default function Header() {
    return (
        <header className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
                <img src="/favicon.png" alt="E-Pit Logo" className="size-8" />
                <span className="font-extrabold text-2xl">Season 12</span>
            </div>
            <div className="flex items-center gap-8">
                <CoinsValue>
                    <Diamond size={24} className="text-primary" />
                    <span>2639</span>
                </CoinsValue>
                <CoinsValue>
                    <Coins size={24} className="text-primary" />
                    <span>100</span>
                </CoinsValue>
                <CoinsValue>
                    <SketchLogo size={24} className="text-primary" />
                    <span>250</span>
                </CoinsValue>
            </div>
            <div>
                <img className="rounded-full size-12" src="https://i.pravatar.cc" alt="" />
            </div>
        </header>
    );
}
