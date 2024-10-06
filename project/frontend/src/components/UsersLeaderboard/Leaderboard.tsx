import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { usePilots } from "@/hooks/usePilots";
import { useUsers } from "@/hooks/useUsers";
import { ChartNoAxesGantt } from "lucide-react";

export function Leaderboard() {
    const users = useUsers();
    const pilots = usePilots();

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">User ID</TableHead>
                    <TableHead className="w-[100px]">Profile</TableHead>
                    <TableHead>Best Pilot</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead className="text-right">Total Points</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[...users]
                    .sort((a, b) => b.points - a.points)
                    .map((user) => {
                        const bestPilot = pilots.find(
                            (pilot) => pilot._id === user.drivers?.[0]
                        );
                        return (
                            <TableRow key={user._id}>
                                <TableCell className="font-medium">{`#${user._id}`}</TableCell>
                                <TableCell className="font-medium">
                                    <img
                                        className="rounded-full size-8"
                                        draggable="false"
                                        src={user.imageUrl}
                                        alt={user.username}
                                    />
                                </TableCell>
                                <TableCell>
                                    {bestPilot?.firstname || "N/A"}
                                </TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell className="text-right flex items-center justify-end gap-2">
                                    <ChartNoAxesGantt />
                                    {user.points}
                                </TableCell>
                            </TableRow>
                        );
                    })}
            </TableBody>
        </Table>
    );
}
