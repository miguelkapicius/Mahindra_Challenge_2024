import { usersState } from "@/atoms/atom";
import api from "@/axiosInstance";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export interface User {
    _id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    drivers?: Array<string>;
    friends?: Array<string>;
    banner: string;
    coins: number;
    points: number;
}

export function useUsers() {
    const [users, setUsers] = useRecoilState<User[]>(usersState);

    useEffect(() => {
        api.get("/users").then((response) => {
            setUsers(response.data);
        });
    }, []);

    return users;
}
