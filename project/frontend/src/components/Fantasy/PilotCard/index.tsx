import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@/components/ui/table";
import { usePilots } from "@/hooks/usePilots";
import { CoinsIcon } from "lucide-react";
import { memo } from "react";

interface PilotCardsProps {
    nameFilter: string;
    priceFilter: number;
}

function PilotCards({ nameFilter, priceFilter }: PilotCardsProps) {
    const pilots = usePilots();
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {pilots
                .filter(
                    (pilot) =>
                        (nameFilter
                            ? pilot.firstname
                                  .toLowerCase()
                                  .includes(nameFilter.toLowerCase()) ||
                              pilot.team
                                  .toLowerCase()
                                  .includes(nameFilter.toLowerCase())
                            : true) &&
                        (priceFilter > 0 ? pilot.price <= priceFilter : true)
                )
                .map((pilot) => (
                    <Card
                        key={`${pilot._id}`}
                        className="flex flex-col gap-2 p-4 rounded overflow-hidden"
                    >
                        <img
                            src={`${pilot.image}`}
                            fetchPriority="high"
                            alt={`${pilot.firstname}`}
                            draggable="false"
                            className="w-full object-cover bg-accent"
                        />
                        <Table className="text-sm flex-grow">
                            <TableBody>
                                <TableRow>
                                    <TableHead className="text-left">
                                        Name
                                    </TableHead>
                                    <TableCell className="font-medium">
                                        {pilot.firstname} {pilot.lastname}
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

export const PilotCard = memo(PilotCards);
