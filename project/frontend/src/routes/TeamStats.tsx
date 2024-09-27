import { PodiumsChart } from "@/components/TeamsStats/PodiumsChart";
import { WinsChart } from "@/components/TeamsStats/WinsChart";
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
            <div
                className="col-span-full h-60 rounded drop-shadow-lg flex justify-center items-center"
                style={{ backgroundColor: `${currentTeam?.color}` }}
            >
                <h2 className="text-center text-accent p-6 rounded text-5xl font-display">
                    {currentTeam?.teamRef}
                </h2>
                <p>{currentTeam?.name}</p>
            </div>
            <div className="col-span-full flex flex-col md:flex-row gap-6">
                <WinsChart
                    data={currentTeam?.winsChart}
                    color={currentTeam?.color}
                />
                <PodiumsChart
                    data={currentTeam?.podiumsChart}
                    color={currentTeam?.color}
                />
            </div>
            <div className="space-y-6 col-span-full">
                {/* {currentTeam?.pilots!.map((pilot) => (
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
                ))} */}
            </div>
        </section>
    );
}
