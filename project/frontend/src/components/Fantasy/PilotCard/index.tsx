import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@/components/ui/table";
import { CoinsIcon } from "lucide-react";

const pilots = [
    {
        id: 1,
        name: "Max Verstappen",
        image: "/images/pilots/max-verstappen.jpg",
        team: "Red Bull",
        points: 100,
        price: 100,
    },
];  

interface PilotCardProps {
    nameFilter: string;
    teamFilter: string;
    priceFilter: number;
}

export function PilotCard({ nameFilter, teamFilter, priceFilter }: PilotCardProps) {
    return (
        <section className="grid grid-cols-4 gap-6">
            {pilots
                .filter(
                    (pilot) =>
                        (nameFilter
                            ? pilot.name
                                  .toLowerCase()
                                  .includes(nameFilter.toLowerCase())
                            : true) &&
                        (teamFilter
                            ? pilot.team
                                  .toLowerCase()
                                  .includes(teamFilter.toLowerCase())
                            : true) &&
                        (priceFilter > 0 ? pilot.price <= priceFilter : true)
                )
                .map((pilot) => (
                    <Card
                        key={pilot.id}
                        className="w-64 flex flex-col gap-2 p-4 rounded overflow-hidden"
                    >
                        <img
                            src={pilot.image}
                            alt=""
                            className="w-full object-cover bg-accent"
                        />
                        <Table className="text-sm flex-grow">
                            <TableBody>
                                <TableRow>
                                    <TableHead className="text-left">
                                        Name
                                    </TableHead>
                                    <TableCell className="font-medium">
                                        {pilot.name}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableHead className="text-left">
                                        Team
                                    </TableHead>
                                    <TableCell>{pilot.team}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableHead className="text-left">
                                        Points
                                    </TableHead>
                                    <TableCell>{pilot.points}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableHead className="text-left">
                                        Price
                                    </TableHead>
                                    <TableCell>{pilot.price}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Button
                            variant="buy"
                            className="flex items-center justify-center gap-4 w-full mt-auto"
                        >
                            <CoinsIcon />
                            Buy
                        </Button>
                    </Card>
                ))}
        </section>
    );
}
