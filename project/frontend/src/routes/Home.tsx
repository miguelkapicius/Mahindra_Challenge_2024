import { CarouselDisplay } from "@/components/Carousel";
import { Leaderboard } from "@/components/Home/Leaderboard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NextRaceCountdown } from "@/components/Home/NextRaceCountdown";
import { useState } from "react";

export default function Home() {
    const [isSimulating, setIsSimulating] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    function startSimulation() {
        setIsSimulating((prev) => !prev);
    }

    function handleClick() {
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
            setIsSimulating(false);
        }, 10000);
    }

    return (
        <main className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="grid col-span-full row-span-4 gap-4">
                <Card className="h-96">
                    <div className="flex flex-col items-center justify-center h-full font-display space-y-6">
                        <h2 className="text-2xl font-bold mb-4 text-muted-foreground">
                            Next Race Countdown
                        </h2>
                        <NextRaceCountdown />
                        <Button
                            onClick={() => {
                                startSimulation(), handleClick();
                            }}
                            className={isSimulating ? "animate-pulse" : ""}
                            disabled={isDisabled}
                        >
                            {isSimulating ? "Simulating..." : "Simulate Race"}
                        </Button>
                    </div>
                </Card>
                <CarouselDisplay />
            </div>
            <div className="col-span-full">
                <Leaderboard onSimulateRace={isSimulating} />
            </div>
        </main>
    );
}
