import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { usePilots } from "@/hooks/usePilots";
import { useEffect, useState } from "react";

export function Leaderboard({ onSimulateRace }: { onSimulateRace: any }) {
    const pilots = usePilots();

    const [simulatePilots, setSimulatePilots] = useState(
        pilots.map((pilot, index) => ({
            position: index + 1,
            id: pilot._id,
            image: pilot.image,
            firstname: pilot.firstname,
            lastname: pilot.lastname,
            time: "08:32",
            speed: 320,
            battery: 95,
            lap: 6,
            lastLapTime: "01:32.43",
            sector1Time: "01.42.49",
            sector2Time: "01.47.49",
            sector3Time: "01.41.49",
        }))
    );

    const [isRacing, setIsRacing] = useState(false);

    const shufflePositions = (pilotsArray: any) => {
        const positions = pilotsArray.map((_: any, index: any) => index + 1);

        for (let i = positions.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [positions[i], positions[randomIndex]] = [
                positions[randomIndex],
                positions[i],
            ];
        }

        return pilotsArray.map((pilot: any, index: any) => ({
            ...pilot,
            position: positions[index],
        }));
    };

    useEffect(() => {
        if (isRacing) {
            const interval = setInterval(() => {
                setSimulatePilots((prevPilots) => shufflePositions(prevPilots));
            }, 1000);

            setTimeout(() => {
                clearInterval(interval);
                setIsRacing(false);
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [isRacing]);

    useEffect(() => {
        if (onSimulateRace) {
            setIsRacing(true);
        }
    }, [onSimulateRace]);
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
                {simulatePilots
                    .sort((a, b) => a.position - b.position)
                    .map((pilot) => (
                        <TableRow
                            key={`${pilot.id}`}
                            className="gap-y-2 md:gap-y-0 duration-150"
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
                                    alt={`${pilot.firstname}`}
                                />
                                {pilot.firstname} {pilot.lastname}
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-center">
                                {pilot.time}
                            </TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
}
