import { CalendarForm } from "@/components/RaceHistory/Calendar";
import { DataTable } from "@/components/RaceHistory/DataTable";

export function RaceHistory() {
    return (
        <section className="space-y-6">
            <h2 className="text-3xl md:text-5xl">Last Races</h2>
            <div className="flex flex-col items-start gap-6">
                <CalendarForm />
                <DataTable />
            </div>
        </section>
    );
}
