import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Teams() {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/teams").then((response) => {
            setTeams(response.data);
        });
    }, []);
    return (
        <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display">Teams</h2>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teams.map((team) => (
                    <NavLink to={`${team.name}`}>
                        <Card className="hover:scale-105 duration-500">
                            <CardHeader>
                                <h2 className="font-display text-xl">
                                    {team.teamRef}
                                </h2>
                                <img src={team.image} alt={team.teamRef} />
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Wins</TableHead>
                                            <TableHead>Podiums</TableHead>
                                            <TableHead className="text-right">
                                                Points
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{team.wins}</TableCell>
                                            <TableCell>
                                                {team.podiums}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {team.points}
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
