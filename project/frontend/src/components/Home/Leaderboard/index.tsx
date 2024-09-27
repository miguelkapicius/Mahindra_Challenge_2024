import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { PilotInfo } from "../PilotInfo";

import { IPilot } from "@/components/Fantasy/PilotCard";
import { useEffect, useState } from "react";
import api from "@/axiosInstance";

export function Leaderboard() {
    const [pilots, setPilots] = useState<IPilot[]>([]);
    useEffect(() => {
        api.get("/drivers").then((response) => {
            console.log(response.data);
            setPilots(response.data);
        });
    }, []);

    const leaderboard = pilots.map((pilot, index) => ({
        position: index + 1,
        id: pilot._id,
        image: pilot.image,
        name: pilot.firstname,
        team: pilot.team,
        time: "08:32",
        speed: 320,
        battery: 95,
        lap: 6,
        lastLapTime: "01:32.43",
        sector1Time: "01.42.49",
        sector2Time: "01.47.49",
        sector3Time: "01.41.49",
    }));
    return (
        <Table className="text-xs md:text-lg">
            <TableCaption>Leaderboard</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center w-[50px]">
                        Position
                    </TableHead>
                    <TableHead className="w-[400px] md:w-[200px]">
                        Pilot
                    </TableHead>
                    <TableHead className="w-[150px]">Team</TableHead>
                    <TableHead className="hidden md:table-cell text-center w-[100px]">
                        Time
                    </TableHead>
                    <TableHead className="w-[120px] text-center">
                        More Info
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {leaderboard
                    .sort((a, b) => a.position - b.position)
                    .map((pilot) => (
                        <TableRow
                            key={`${pilot.id}`}
                            className="gap-y-2 md:gap-y-0"
                        >
                            <TableCell
                                className={`text-center font-medium ${
                                    pilot.position <= 3 && "text-green-500"
                                } ${pilot.position >= 12 && "text-red-500"}`}
                            >
                                {pilot.position}
                            </TableCell>
                            <TableCell className="flex items-center gap-2 md:gap-4 truncate">
                                <img
                                    className="rounded-full size-8 md:size-10"
                                    src={`${pilot.image}`}
                                    alt={`${pilot.name}`}
                                />
                                {pilot.name}
                            </TableCell>
                            <TableCell>{pilot.team}</TableCell>
                            <TableCell className="hidden md:table-cell text-center">
                                {pilot.time}
                            </TableCell>
                            <TableCell>
                                <PilotInfo
                                    pilot={{
                                        ...pilot,
                                        id: pilot.id,
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
}
