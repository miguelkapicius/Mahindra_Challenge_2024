import { Speedometer } from "../components/Speedometer";

function Races() {
    return (
        <>
            <div className="flex h-full gap-4">
                <section className="w-1/2 h-full border border-gray-900 rounded-lg"></section>
                <section className="w-1/2 h-full border border-gray-900 rounded-lg">
                    <header className="py-2 bg-indigo-700 text-center rounded-t-lg">
                        <span className="uppercase font-light">
                            Felipe Massa
                        </span>
                    </header>
                    <div className="h-full grid grid-cols-3 grid-rows-10 *:border *:border-gray-900">
                        <article className="row-span-2 col-span-1 flex items-center justify-center">
                            posicao
                        </article>
                        <article className="row-span-2 col-span-1 flex items-center justify-center">
                            tempo
                        </article>
                        <article className="row-span-2 col-span-1 flex items-center justify-center">
                            volta
                        </article>
                        <article className="row-span-4 col-span-1 flex items-center justify-center">
                            bateria
                        </article>
                        <article className="row-span-2 col-span-2 container">
                            <Speedometer />
                        </article>
                        <article className="row-span-2 col-span-1 flex items-center justify-center">
                            localização
                        </article>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Races;
