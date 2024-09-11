import { PodiumsChart } from "@/components/TeamsStats/PodiumsChart";
import { PointsChart } from "@/components/TeamsStats/PointsChart";
import { WinsChart } from "@/components/TeamsStats/WinsChart";
import { Card, CardContent } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const pilots = [
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
];

export function TeamStats() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-full bg-red-400 h-60 rounded drop-shadow-lg flex justify-center items-center">
                <h2 className="text-center text-accent p-6 rounded text-5xl font-display">
                    Mahindra
                </h2>
            </div>
            <div className="col-span-full flex flex-col md:flex-row gap-6">
                <WinsChart />
                <PodiumsChart />
                <PointsChart />
            </div>
            <div className="space-y-6 col-span-full">
                {pilots.map((pilot) => (
                    <Card className="flex flex-col pt-6 md:flex-row items-center gap-6">
                        <img
                            className="object-cover bg-accent md:bg-transparent p-6 pb-0 rounded w-1/3"
                            src={pilot.image}
                            alt=""
                        />
                        <CardContent className="w-2/3 space-y-6 overflow-hidden">
                            <h2 className="text-2xl md:text-5xl font-display">
                                {pilot.name}
                            </h2>
                            <Table className="text-2xl">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Wins</TableHead>
                                        <TableHead>Podiums</TableHead>
                                        <TableHead>Best Lap</TableHead>
                                        <TableHead className="text-right">
                                            Points
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{pilot.wins}</TableCell>
                                        <TableCell>{pilot.podiums}</TableCell>
                                        <TableCell>{pilot.best_lap}</TableCell>
                                        <TableCell className="text-right">
                                            {pilot.points}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
