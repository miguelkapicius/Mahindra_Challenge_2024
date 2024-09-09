import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChartNoAxesGantt, CoinsIcon } from "lucide-react";

const resources = {
    coins: 200,
    points: 2000,
};

export function Coins() {
    return (
        <div className="flex gap-2">

        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="secondary" className="flex items-center gap-4"><ChartNoAxesGantt />{resources.points}</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Your fantasy points</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="secondary" className="flex items-center gap-4"><CoinsIcon />{resources.coins}</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Your coins</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        </div>
    );
}
