import { countdownAtom } from "@/atoms/Countdown";
import { useCountdown } from "@/hooks/useCountdown";
import { useRecoilValue } from "recoil";

export function NextRaceCountdown() {
    const nextRaceLocale = "São Paulo"
    useCountdown(new Date("2024-12-07T07:00:00"))
    const countdown = useRecoilValue(countdownAtom);

    return (
        <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold space-y-6">
                <span className="block">
                    {countdown.days}d {countdown.hours}h {countdown.minutes}m{" "}
                    {countdown.seconds}s
                </span>
                <span className="block">{nextRaceLocale}</span>
            </div>
        </div>
    );
};