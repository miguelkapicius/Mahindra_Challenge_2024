import { countdownAtom } from "@/atoms/Countdown";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export function useCountdown(targetDate: Date) {
    const setCountdown = useSetRecoilState(countdownAtom);
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setCountdown({
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
    }, [setCountdown]);
}
