import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useTeams } from "@/hooks/useTeams";
import { NavLink } from "react-router-dom";

export default function Teams() {
    const teams = useTeams();
    return (
        <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display">Teams</h2>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teams?.map((team) => (
                    <NavLink
                        key={`{$team._id}`}
                        to={`${team.teamRef.toLowerCase()}`}
                    >
                        <Card className="hover:scale-105 duration-500 bg-destructive-foreground text-black">
                            <CardHeader className="flex items-center justify-center gap-6">
                                <h2 className="font-display text-xl">
                                    {team.teamRef}
                                </h2>
                                <img
                                    src={`${team.logo}`}
                                    alt={`${team.teamRef}`}
                                    className="w-72"
                                />
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Wins</TableHead>
                                            <TableHead>Podiums</TableHead>
                                            <TableHead className="text-right">
                                                Races
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                {team.wins.toString()}
                                            </TableCell>
                                            <TableCell>
                                                {team.podiums.toString()}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {team.races.toString()}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </NavLink>
                ))}
            </section>
        </div>
    );
}
