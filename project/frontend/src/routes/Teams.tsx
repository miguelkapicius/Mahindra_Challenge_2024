import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { NavLink } from "react-router-dom";

const teams = [
    {
        name: "Mahindra",
        color: "#F87171",
        image: "https://static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/fa97d2e7-02ca-4983-a930-4fdaa245a852.png",
        url: "mahindra",
        wins: 12,
        podiums: 30,
        points: 200,
    },
    {
        name: "ERT",
        color: "#D4DA2F",
        image: "https://static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/5ac8091a-b415-4abb-a7ef-fb5511e545d5.png",
        url: "ert",
        wins: 20,
        podiums: 60,
        points: 300,
    },
];

export function Teams() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-display">Teams</h2>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teams.map((team) => (
                    <NavLink to={`${team.url}`}>
                        <Card className="hover:scale-105 duration-500">
                            <CardHeader>
                                <h2 className="font-display text-xl">
                                    {team.name}
                                </h2>
                                <img src={team.image} alt={team.name} />
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
