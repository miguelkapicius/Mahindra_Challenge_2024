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

export const pilots = [
    {
        id: 1,
        name: "Edoardo Mortara",
        image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/728b2253-b9d4-47dd-9051-e970bff2a62f.png",
        team: "Mahindra",
        points: 100,
        price: 100,
    },
    {
        id: 2,
        name: "Nick De Vries",
        image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/728b2253-b9d4-47dd-9051-e970bff2a62f.png",
        team: "Mahindra",
        points: 100,
        price: 100,
    },
    {
        id: 3,
        name: "Edoardo Mortara",
        image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/728b2253-b9d4-47dd-9051-e970bff2a62f.png",
        team: "Mahindra",
        points: 100,
        price: 100,
    },
    {
        id: 1,
        name: "Edoardo Mortara",
        image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/728b2253-b9d4-47dd-9051-e970bff2a62f.png",
        team: "Mahindra",
        points: 100,
        price: 100,
    },
    {
        id: 2,
        name: "Edoardo Mortara",
        image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/728b2253-b9d4-47dd-9051-e970bff2a62f.png",
        team: "Mahindra",
        points: 100,
        price: 100,
    },
    {
        id: 3,
        name: "Edoardo Mortara",
        image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/728b2253-b9d4-47dd-9051-e970bff2a62f.png",
        team: "Mahindra",
        points: 100,
        price: 100,
    },
];

interface PilotCardProps {
    nameFilter: string;
    priceFilter: number;
}

export function PilotCard({ nameFilter, priceFilter }: PilotCardProps) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {pilots
                .filter(
                    (pilot) =>
                        (nameFilter
                            ? pilot.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
                              pilot.team
                                  .toLowerCase()
                                  .includes(nameFilter.toLowerCase())
                            : true) &&
                        (priceFilter > 0 ? pilot.price <= priceFilter : true)
                )
                .map((pilot) => (
                    <Card
                        key={pilot.id}
                        className="flex flex-col gap-2 p-4 rounded overflow-hidden"
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
