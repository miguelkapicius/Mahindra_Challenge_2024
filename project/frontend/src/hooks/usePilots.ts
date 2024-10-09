import { pilotsState } from "@/atoms/atom";
import api from "@/axiosInstance";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export interface IPilot {
    _id: string;
    firstname: string;
    lastname: string;
    nationality: string;
    image: string;
    wins: number;
    podiums: number;
    points: number;
    price: number;
    time: "08:32";
    speed: 320;
    battery: 95;
    lap: 6;
    lastLapTime: "01:32.43";
    sector1Time: "01.42.49";
    sector2Time: "01.47.49";
    sector3Time: "01.41.49";
}
export function usePilots() {
    const [pilots, setPilots] = useRecoilState<IPilot[]>(pilotsState);
    useEffect(() => {
        api.get("/drivers").then((response) => {
            setPilots(response.data);
        });
    }, []);

    return pilots;
}
