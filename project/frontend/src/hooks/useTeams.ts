import { teamsState } from "@/atoms/atom";
import api from "@/axiosInstance";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { IPilot } from "./usePilots";

export interface Team {
    _id: string;
    teamRef: string;
    name: string;
    nationality: string;
    logo: string;
    carImage: string;
    carModel: string;
    color: string;
    wins: Number;
    podiums: Number;
    races: Number;
    winsChart?: Array<{
        win: Number;
        month: string;
    }>;
    podiumsChart?: Array<{
        podium: Number;
        month: string;
    }>;
    pilots?: Array<IPilot>; // Lista de pilotos associados ao time
}

export function useTeams() {
    const [teams, setTeams] = useRecoilState<Team[]>(teamsState);
    useEffect(() => {
        api.get("/teams").then((response) => {
            setTeams(response.data);
        });
    }, []);

    return teams;
}
