import { IPilot } from "@/hooks/usePilots";
import { Team } from "@/hooks/useTeams";
import { User } from "@/hooks/useUsers";
import { atom } from "recoil";

export const teamsState = atom<Team[]>({
    key: "teamsState",
    default: [],
});

export const pilotsState = atom<IPilot[]>({
    key: "pilotsState",
    default: [],
});

export const usersState = atom<User[]>({
    key: "usersState",
    default: [],
});
