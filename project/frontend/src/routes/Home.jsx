import { BarChart } from "../components/BarChart";
import Card from "../components/Card";

document.title = "E-Pit | Dashboard";

function Home() {
    return (
        <>

            <section className="grid h-max 2xl:h-full w-screen mobile:max-2xl:p-10 grid-cols-12 mobile:max-2xl:grid-cols-1 grid-rows-12 gap-5 flex-grow">

                <Card style="col-span-3 mobile:max-2xl:col-span-1 mobile:max-2xl:h-96 row-span-4 2xl:hover:scale-105 p-6 bg-slate-900/40">
                    <h5 className="mb-5 text-2xl font-bold tracking-tight">
                        Ranking
                    </h5>
                    <p className="text-5xl font-bold">1335</p>
                </Card>
                <Card style="col-span-3 mobile:max-2xl:col-span-1 mobile:max-2xl:h-96 row-span-4 2xl:hover:scale-105 p-6 bg-slate-900/40"></Card>
                <Card style="col-span-3 mobile:max-2xl:col-span-1 mobile:max-2xl:row-span-8 row-span-4 2xl:hover:scale-105 p-6 bg-slate-900/40"></Card>
                <Card style="col-span-2 mobile:max-2xl:col-span-1 mobile:max-2xl:h-96 row-span-12 2xl:hover:scale-105 p-6 bg-slate-900/40">
                </Card>
                <Card style="col-span-6 mobile:max-2xl:col-span-1 mobile:max-2xl:h-96 row-span-8 2xl:hover:scale-105 p-6 bg-slate-900/40">
                    <BarChart />
                </Card>
                <Card style="col-span-3 mobile:max-2xl:col-span-1 mobile:max-2xl:h-96 mobile:max-2xl:mb-10 row-span-8 2xl:hover:scale-105 p-6 bg-slate-900/40">
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
