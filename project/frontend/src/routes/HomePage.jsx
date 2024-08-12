import { Map } from "../components/Home/Map";
import { RaceRanking } from "../components/Home/RaceRanking";
import { SelectedPilotCard } from "../components/Home/SelectedPilotCard";
import { createSwapy } from "swapy";
import { useEffect } from "react";

const DEFAULT = {
  1: "a",
  2: "b",
  3: "c",
  4: null,
};

function getItemById(itemId) {
  switch (itemId) {
      case "a":
          return <Map />;
      case "b":
          return <SelectedPilotCard />;
      case "c":
          return <RaceRanking />;
  }
}

export function HomePage() {

    const slotItems = localStorage.getItem("slotItem")
        ? JSON.parse(localStorage.getItem("slotItem"))
        : DEFAULT;
    useEffect(() => {
        const container = document.querySelector("#container");
        const swapy = createSwapy(container, {
          animation: 'dynamic' // or spring or none
        });
        swapy.onSwap(({ data }) => {
            localStorage.setItem("slotItem", JSON.stringify(data.object));
        });
    }, []);

    return (
        <div id="container" className="p-2 grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-6 grid-rows-12 h-screen">
            <div className="bg-zinc-900/40 rounded row-span-4 xl:col-span-3 xl:row-span-6" data-swapy-slot="1">
                {getItemById(slotItems["1"])}
            </div>
            <div className="bg-zinc-900/40 rounded row-span-2 xl:col-span-1 xl:row-span-6" data-swapy-slot="2">
                {getItemById(slotItems["2"])}
            </div>
            <div className="bg-zinc-900/40 rounded row-span-10 xl:col-span-4 xl:row-span-6" data-swapy-slot="3">
                {getItemById(slotItems["3"])}
            </div>
            <div className="bg-zinc-900/40 rounded row-span-8 xl:col-span-2 xl:row-span-full" data-swapy-slot="4">
                {getItemById(slotItems["4"])}
            </div>
        </div>
    );
}
