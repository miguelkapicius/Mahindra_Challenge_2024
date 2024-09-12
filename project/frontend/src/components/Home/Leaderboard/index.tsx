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

import { pilots } from "@/components/Fantasy/PilotCard";

const leaderboard = pilots.map((pilot, index) => ({
    position: index + 1,
    id: pilot.id,
    image: pilot.image,
    name: pilot.name,
    team: pilot.team,
    time: "08:32",
}));

export function Leaderboard() {
    return (
        <Table className="overflow-x-hidden text-xs md:text-lg">
            <TableCaption>Leaderboard</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center w-[80px]">
                        Position
                    </TableHead>
                    <TableHead className="w-[200px]">Pilot</TableHead>
                    <TableHead className="w-[150px]">Team</TableHead>
                    <TableHead className="text-center w-[100px]">Time</TableHead>
                    <TableHead className="w-[120px] text-center">
                        More Info
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {leaderboard
                    .sort((a, b) => a.position - b.position)
                    .map((pilot) => (
                        <TableRow key={pilot.id}>
                            <TableCell
                                className={`text-center font-medium ${
                                    pilot.position <= 3 && "text-green-500"
                                } ${pilot.position >= 12 && "text-red-500"}`}
                            >
                                {pilot.position}
                            </TableCell>
                            <TableCell className="flex items-center gap-4">
                                <img className="rounded-full size-10" src={pilot.image} alt={pilot.name} />
                                {pilot.name}
                            </TableCell>
                            <TableCell>{pilot.team}</TableCell>
                            <TableCell className="text-center">
                                {pilot.time}
                            </TableCell>
                            <TableCell className="flex justify-center">
                                <PilotInfo />
                            </TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
}
