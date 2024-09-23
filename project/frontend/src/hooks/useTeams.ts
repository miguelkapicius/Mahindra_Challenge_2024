import { teamsState } from "@/atoms/teamsState";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export function useTeams() {
    const [teams, setTeams] = useRecoilState(teamsState);
    useEffect(() => {
        axios.get("http://localhost:3000/teams").then((response) => {
            setTeams(response.data);
        });
    }, []);

    return teams;
}
