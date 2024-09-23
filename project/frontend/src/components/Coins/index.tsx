import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { AuthContext } from "@/context/auth";
import { ChartNoAxesGantt, CoinsIcon } from "lucide-react";
import { useContext } from "react";

export function Coins() {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex gap-2">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="secondary"
                            className="flex items-center gap-4"
                        >
                            <ChartNoAxesGantt />
                            {user?.points.toString()}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Your fantasy points</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="secondary"
                            className="flex items-center gap-4"
                        >
                            <CoinsIcon />
                            {user?.coins.toString()}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Your coins</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
