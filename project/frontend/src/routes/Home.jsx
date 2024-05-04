import { BarChart } from "../components/BarChart";
import Card from "../components/Card";
import { RankingTableChart } from "../components/RankingTableChart";

document.title = "E-Pit | Dashboard";

function Home() {
    return (
        <>

            <section className="grid h-full w-screen grid-cols-12 grid-rows-12 gap-5">

                <Card style="col-span-3 row-span-4 hover:scale-105 p-6 bg-slate-900/40">
                    <h5 className="mb-5 text-2xl font-bold tracking-tight">
                        Ranking
                    </h5>
                    <p className="text-5xl font-bold">1335</p>
                </Card>
                <Card style="col-span-3 row-span-4 hover:scale-105 p-6 bg-slate-900/40"></Card>
                <Card style="col-span-3 row-span-4 hover:scale-105 p-6 bg-slate-900/40"></Card>
                <Card style="col-span-2 row-span-12 hover:scale-105 p-6 bg-slate-900/40">
                    <RankingTableChart />
                </Card>
                <Card style="col-span-6 row-span-8 hover:scale-105 p-6 bg-slate-900/40">
                    <BarChart />
                </Card>
                <Card style="col-span-3 row-span-8 hover:scale-105 p-6 bg-slate-900/40">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        Mahindra Challenge 2024
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis laboriosam est dicta quaerat, tempora
                        labore, nobis repudiandae inventore saepe nulla cum
                        laborum ut animi dolore neque debitis non odio et?
                    </p>
                </Card>
            </section>
        </>
    );
}

export default Home;
