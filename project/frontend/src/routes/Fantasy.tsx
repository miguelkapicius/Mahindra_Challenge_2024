import { useState } from "react";
import { Input } from "@/components/ui/input";
import { PilotCard } from "@/components/Fantasy/PilotCard";
import { PriceFilter } from "@/components/Fantasy/PilotCard/PriceFilter";

export default function Fantasy() {
    const [nameFilter, setNameFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState<number>(0);

    return (
        <main className="space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <Input
                    placeholder="Search by pilot name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNameFilter(e.target.value)
                    }
                />
                <div className="flex items-center gap-2">
                    <PriceFilter
                        value={priceFilter}
                        onChange={setPriceFilter}
                    />
                </div>
            </div>
            <PilotCard nameFilter={nameFilter} priceFilter={priceFilter} />
        </main>
    );
}
