import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@/components/ui/table";
import { AuthContext } from "@/context/auth";
import { usePilots } from "@/hooks/usePilots";
import { useTeams } from "@/hooks/useTeams";
import { CoinsIcon, Replace } from "lucide-react";
import { memo, useContext, useEffect, useState } from "react";

interface PilotCardsProps {
    nameFilter: string;
    priceFilter: number;
}

function PilotCards({ nameFilter, priceFilter }: PilotCardsProps) {
    const pilots = usePilots();
    const teams = useTeams();
    const { user, updateUserDrivers } = useContext(AuthContext);
    const [pilotToReplace, setPilotToReplace] = useState<string | null>(null);

    useEffect(() => {
        if (pilotToReplace) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [pilotToReplace]);

    async function buyPilot(pilot: string, price: number) {
        if (user?.coins! < price) {
            alert("Your coins are not enough!");
            return;
        }

        if (user?.drivers?.length! < 2) {
            if (!user?.drivers.includes(pilot)) {
                const updatedDrivers = [...user?.drivers!, pilot];
                await updateUserDrivers(updatedDrivers, price);
            } else {
                alert("This driver already selected");
                return;
            }
        } else {
            setPilotToReplace(pilot);
        }
    }

    async function replaceDriver(
        driverId: string,
        newDriverId: string,
        price: number
    ) {
        const updatedDrivers = user?.drivers.map((driver) =>
            driver === driverId ? newDriverId : driver
        );
        await updateUserDrivers(updatedDrivers!, price);
        setPilotToReplace(null);
    }

    function getPilotTeams(pilots: any, teams: any) {
        return pilots.map((pilot: any) => {
            const team = teams.find((t: any) => t.pilotIds.includes(pilot._id));
            return {
                ...pilot,
                team: team ? team.name : "No Team", // Se não encontrar time, coloca "No Team"
            };
        });
    }

    const pilotsWithTeams = pilots.map((pilot) => {
        const team = teams.find((t) => t.pilots?.includes(pilot._id));
        return {
            ...pilot,
            team: team ? team.name : "No Team",
        };
    });

    return (
        <>
            {pilotToReplace !== null && (
                <div className="h-screen p-2 w-screen overflow-hidden bg-black/80 fixed flex justify-center items-center inset-0 left-0 top-0 z-40">
                    <Card className="z-50 p-6 space-y-6 max-w-5xl">
                        <CardTitle className="px-6">
                            You already have 2 pilots. Which driver do you want
                            to replace?
                        </CardTitle>
                        <CardContent className="overflow-y-auto max-h-[70vh]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {user?.drivers.map((pilotId) => {
                                    const pilot = pilots.find(
                                        (p) => p._id === pilotId
                                    );

                                    if (!pilot) return null;

                                    return (
                                        <Card
                                            key={pilot._id}
                                            className="flex flex-col gap-2 p-4 rounded overflow-hidden lg:w-80"
                                        >
                                            <img
                                                src={pilot.image}
                                                alt={pilot.firstname}
                                                draggable="false"
                                                className="w-full object-cover bg-accent rounded"
                                            />
                                            <Table className="text-sm flex-grow">
                                                <TableBody>
                                                    <TableRow>
                                                        <TableHead className="text-left">
                                                            Name
                                                        </TableHead>
                                                        <TableCell className="font-medium">
                                                            {pilot.firstname}{" "}
                                                            {pilot.lastname}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableHead className="text-left">
                                                            Team
                                                        </TableHead>
                                                        <TableCell>
                                                            {pilot.team}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableHead className="text-left">
                                                            Points
                                                        </TableHead>
                                                        <TableCell>
                                                            {pilot.points}
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableHead className="text-left">
                                                            Price
                                                        </TableHead>
                                                        <TableCell>
                                                            {pilot.price}
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                            <Button
                                                className="flex items-center justify-center gap-4 w-full mt-auto"
                                                onClick={() =>
                                                    replaceDriver(
                                                        pilot._id,
                                                        pilotToReplace!,
                                                        pilot.price
                                                    )
                                                }
                                            >
                                                <Replace />
                                                Replace
                                            </Button>
                                        </Card>
                                    );
                                })}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant={"destructive"}
                                onClick={() => setPilotToReplace(null)}
                            >
                                Cancelar
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            )}
            <section className={`grid grid-cols-1 md:grid-cols-4 gap-6`}>
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
                            (priceFilter > 0
                                ? pilot.price <= priceFilter
                                : true)
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
                                className="w-full object-cover bg-accent rounded"
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
                                onClick={() => buyPilot(pilot._id, pilot.price)}
                                disabled={user?.drivers.includes(pilot._id)}
                            >
                                <CoinsIcon />
                                Buy
                            </Button>
                        </Card>
                    ))}
            </section>
        </>
    );
}

export const PilotCard = memo(PilotCards);
