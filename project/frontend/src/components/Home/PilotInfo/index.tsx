import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    AudioWaveform,
    Battery,
    BatteryFull,
    BatteryMedium,
    Clock,
    Flag,
    Gauge,
    Hourglass,
} from "lucide-react";

export interface Pilot {
    id: String;
    name: String;
    team: String;
    image: String;
    position: number;
    time: String;
    speed: number;
    battery: number;
    lap: number;
    lastLapTime: String;
    sector1Time: String;
    sector2Time: String;
    sector3Time: String;
}

export function PilotInfo({ pilot }: { pilot: Pilot }) {
    return (
        <Drawer>
            <DrawerTrigger className="mx-auto" asChild>
                <Button variant="outline" className="flex gap-2">
                    Stats
                </Button>
            </DrawerTrigger>
            <DrawerContent className="h-max">
                <div className="mx-auto w-full max-w-6xl space-y-6">
                    <DrawerHeader className="flex items-center gap-4">
                        <img
                            src={`${pilot.image}`}
                            alt={`${pilot.name}`}
                            draggable="false"
                            className="rounded-full bg-accent object-cover size-20"
                        />
                        <div>
                            <DrawerTitle>{pilot.name}</DrawerTitle>
                            <DrawerDescription>{pilot.team}</DrawerDescription>
                        </div>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 *:p-6 *:bg-accent *:rounded-lg *:flex *:flex-col *:items-center *:space-y-2">
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-xl md:text-2xl font-bold flex items-center gap-2">
                                    <Flag className="size-6" />
                                    {pilot.position}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Position
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-xl md:text-2xl font-bold flex items-center gap-2">
                                    <Clock className="size-6" />
                                    {pilot.time}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Time
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-xl md:text-xl font-bold flex items-center gap-2">
                                    <Gauge className="size-6" />
                                    {pilot.speed} km/h
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Speed
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-xl md:text-2xl font-bold flex items-center gap-2">
                                    {pilot.battery > 50 ? (
                                        <BatteryFull />
                                    ) : pilot.battery > 25 ? (
                                        <BatteryMedium />
                                    ) : (
                                        <Battery />
                                    )}
                                    {pilot.battery}%
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Battery
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-xl md:text-2xl font-bold flex items-center gap-2">
                                    <AudioWaveform className="size-6" />
                                    {pilot.lap}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Lap
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-xl md:text-2xl font-bold flex items-center gap-2">
                                    <Hourglass className="size-6" />
                                    {pilot.lastLapTime}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    Last Lap
                                </span>
                            </div>
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button
                                className="w-full md:w-1/2 md:mx-auto"
                                variant="outline"
                            >
                                Back
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
