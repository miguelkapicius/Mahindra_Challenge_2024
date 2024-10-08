import { PodiumsChart } from "@/components/TeamsStats/PodiumsChart";
import { WinsChart } from "@/components/TeamsStats/WinsChart";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Table,
} from "@/components/ui/table";
import { useTeams } from "@/hooks/useTeams";

export default function TeamStats() {
    const teams = useTeams();
    const currentTeam = teams.find(
        (team) =>
            team.teamRef.toLowerCase() ===
            new URL(window.location.href).pathname.split("/").pop()
    );

    console.log(teams);
    console.log(currentTeam);

    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-full h-60 rounded drop-shadow-lg flex items-center">
                <div className="w-1/2 flex flex-col gap-2 items-center justify-center h-full p-6 rounded-l bg-destructive-foreground text-muted-foreground">
                    <img
                        draggable="false"
                        className="w-52"
                        src={currentTeam?.logo}
                        alt={currentTeam?.name}
                    />
                    <p>{currentTeam?.name}</p>
                </div>
                <div
                    className="w-1/2 flex flex-col gap-2 items-center justify-center h-full p-6 rounded-r"
                    style={{ backgroundColor: `${currentTeam?.color}` }}
                >
                    <img
                        src={`${currentTeam?.carImage}`}
                        alt={`${currentTeam?.carModel}`}
                        draggable="false"
                    />
                    <p className="font-display text-destructive-foreground">
                        Car Model: {currentTeam?.carModel}
                    </p>
                </div>
            </div>
            <div className="col-span-full grid flex-col grid-cols-1 lg:grid-cols-3 gap-6">
                <WinsChart
                    data={currentTeam?.winsChart}
                    color={currentTeam?.color}
                />
                <PodiumsChart
                    data={currentTeam?.podiumsChart}
                    color={currentTeam?.color}
                />
                <Card className="text-5xl text-center flex flex-col items-center justify-center space-y-6 p-6">
                    <CardTitle>Total Races</CardTitle>
                    <span>{currentTeam?.races.toString()}</span>
                </Card>
            </div>
            <div className="space-y-6 col-span-full">
                {currentTeam?.pilots!.map((pilot) => (
                    <Card className="flex flex-col pt-6 md:flex-row items-center gap-6">
                        <img
                            className="object-cover bg-accent md:bg-transparent p-6 pb-0 rounded w-1/3"
                            src={`${pilot.image}`}
                            draggable="false"
                            alt=""
                        />
                        <CardContent className="w-2/3 space-y-6 overflow-hidden">
                            <h2 className="text-2xl md:text-5xl font-display">
                                {pilot.firstname}
                            </h2>
                            <Table className="text-2xl">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Wins</TableHead>
                                        <TableHead>Podiums</TableHead>
                                        <TableHead>Last Lap</TableHead>
                                        <TableHead className="text-right">
                                            Points
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{pilot.wins}</TableCell>
                                        <TableCell>{pilot.podiums}</TableCell>
                                        <TableCell>
                                            {pilot.lastLapTime}
                                        </TableCell>
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
