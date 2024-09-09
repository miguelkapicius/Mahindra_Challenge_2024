import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type PriceFilterProps = {
    value: number;
    onChange: (value: number) => void;
    className?: string;
};

export function PriceFilter({ value, onChange, className }: PriceFilterProps) {
    return (
        <div className="w-60 flex items-center gap-2">
            <span>Price</span>
            <Slider
                value={[value]}
                onValueChange={([newValue]) => onChange(newValue)}
                max={500}
                step={50}
                className={cn(className)}
            />
            <span>{value > 0 ? `${value}` : "All"}</span>
        </div>
    );
}
