import { CarouselDisplay } from "@/components/Carousel";
import { Leaderboard } from "@/components/Leaderboard";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const NextRaceCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [nextRaceLocale] = useState("São Paulo");

    useEffect(() => {
        // TODO: Replace with actual next race date
        const nextRaceDate = new Date("2024-12-07T07:00:00");

        const timer = setInterval(() => {
            const now = new Date();
            const difference = nextRaceDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-center">
            <div className="text-4xl font-bold space-y-6">
                <span className="block">
                    {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                    {timeLeft.seconds}s
                </span>
                <span className="block">{nextRaceLocale}</span>
            </div>
        </div>
    );
};

export function Home() {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-5 grid-rows-4 gap-6">
            <div className="grid grid-rows-4 col-span-3 row-span-4 gap-4">
                <Card className="row-span-3">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-2xl font-bold mb-4 text-muted-foreground">
                            Next Race Countdown
                        </h2>
                        <NextRaceCountdown />
                    </div>
                </Card>
                <CarouselDisplay />
            </div>
            <div className="col-span-2 row-span-3 mt-4 lg:mt-0">
                <Leaderboard />
            </div>
        </main>
    );
}
