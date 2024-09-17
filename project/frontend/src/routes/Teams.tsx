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

export const teams = [
    {
        name: "Mahindra",
        color: "#F87171",
        image: "https://static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/fa97d2e7-02ca-4983-a930-4fdaa245a852.png",
        url: "mahindra",
        wins: 12,
        podiums: 30,
        points: 200,
        pilots: [
            {
                id: 1,
                name: "Edoardo Mortara",
                image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/728b2253-b9d4-47dd-9051-e970bff2a62f.png",
                team: "Mahindra",
                points: 100,
                wins: 10,
                podiums: 30,
                best_lap: "08:32.34",
                price: 100,
            },
            {
                id: 2,
                name: "Nick De Vries",
                image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/8bd68290-c0ad-43b6-a1ce-ee162b7d8914.png",
                team: "Mahindra",
                points: 80,
                wins: 2,
                podiums: 6,
                best_lap: "09:23.42",
                price: 80,
            },
        ]
    },
    {
        name: "ERT",
        color: "#D4DA2F",
        image: "https://static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/5ac8091a-b415-4abb-a7ef-fb5511e545d5.png",
        url: "ert",
        wins: 20,
        podiums: 60,
        points: 300,
        pilots: [
            {
                id: 1,
                name: "Dan Ticktum",
                image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/0bdc60a2-9884-45b3-848d-3ffecf12fd59.png",
                team: "ERT",
                points: 200,
                wins: 8,
                podiums: 25,
                best_lap: "08:56.08",
                price: 80,
            },
            {
                id: 2,
                name: "Sérgio Sette Câmara",
                image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/b768b851-5611-40be-8687-a0974e3d2754.png",
                team: "ERT",
                points: 90,
                wins: 3,
                podiums: 8,
                best_lap: "09:45.48",
                price: 90,
            },
        ]
    },
];

export default function Teams() {
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
