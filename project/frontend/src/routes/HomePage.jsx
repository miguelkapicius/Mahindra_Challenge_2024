export function HomePage() {
    return (
        <div className="h-screen">
            <div className="h-1/2 bg-zinc-900">
                <img
                    className="size-full"
                    src="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/80-f1-2021-season-circuit-guide-brazil.jpg"
                    alt=""
                />
            </div>
            <div className="p-2">
                <div className="bg-zinc-900 p-2 rounded">
                    <div className="flex flex-col gap-2">
                        <div className="bg-zinc-950 shadow-shape p-2 rounded flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    className="rounded-full size-12 bg-zinc-900 pt-1"
                                    src="https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/4a390151-89af-4931-9907-bcbaabb5a152.png"
                                />
                                <div className="">
                                    <span className="block">
                                        Lucas Di Grassi
                                    </span>
                                    <span className="block text-xs text-zinc-400">
                                        ABT CUPRA
                                    </span>
                                </div>
                            </div>
                            <div className="rounded p-2 bg-zinc-900 shadow-shape">
                                <span className=""># 10</span>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between items-center">
                            <div className="bg-zinc-950 w-1/3 rounded shadow-shape p-2">
                                <span className="text-center block text-xs">Velocidade</span>
                            </div>
                            <div className="bg-zinc-950 w-1/3 rounded shadow-shape p-2">
                                <span className="text-center block text-xs">Energia</span>
                            </div>
                            <div className="bg-zinc-950 w-1/3 rounded shadow-shape p-2">
                                <span className="text-center block text-xs">Volta</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
