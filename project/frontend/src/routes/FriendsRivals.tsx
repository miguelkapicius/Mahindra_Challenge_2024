import { AddFriend } from "@/components/AddFriend";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { AuthContext } from "@/context/auth";
import { usePilots } from "@/hooks/usePilots";
import { useUsers } from "@/hooks/useUsers";
import { ChartNoAxesGantt } from "lucide-react";
import { useContext } from "react";

export default function FriendsRivals() {
    const { user } = useContext(AuthContext);
    const pilots = usePilots();
    const users = useUsers();

    return (
        <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display">
                Friends & Rivals
            </h2>
            <AddFriend />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">User ID</TableHead>
                        <TableHead className="w-[100px]">Profile</TableHead>
                        <TableHead>Best Pilot</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead className="text-right">
                            Total Points
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {(user?.friends || [])
                        .map((friendId) =>
                            users.find((us) => us._id === friendId)
                        )
                        .filter(Boolean)
                        .sort((a, b) => b!.points - a!.points)
                        .map((friendData) => {
                            const bestPilot = pilots.find(
                                (pilot) => pilot._id === user!.drivers?.[0]
                            );
                            return (
                                <TableRow key={friendData!._id}>
                                    <TableCell className="font-medium">{`#${
                                        friendData!._id
                                    }`}</TableCell>
                                    <TableCell className="font-medium">
                                        <img
                                            className="rounded-full size-8"
                                            draggable="false"
                                            src={friendData!.imageUrl}
                                            alt={friendData!.username}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {bestPilot?.firstname || "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        {friendData!.username}
                                    </TableCell>
                                    <TableCell className="text-right flex items-center justify-end gap-2">
                                        <ChartNoAxesGantt />
                                        {friendData!.points}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </section>
    );
}
