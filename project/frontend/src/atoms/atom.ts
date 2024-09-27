import { IPilot } from "@/hooks/usePilots";
import { Team } from "@/hooks/useTeams";
import { atom } from "recoil";

export const teamsState = atom<Team[]>({
    key: "teamsState",
    default: [],
});

export const pilotsState = atom<IPilot[]>({
    key: "pilotsState",
    default: [],
});
