import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "react-day-picker";

export function CalendarForm() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button>
                    <Input placeholder="Pick a date" />
                </Button>
            </PopoverTrigger>
        </Popover>
    );
}
