import { BarChart } from "../components/BarChart";
import Card from "../components/Card";

document.title = "E-Pit | Dashboard";

function Home() {
    return (
        <>

            <section className="grid h-max xl:h-full w-screen mobile:max-xl:p-6 grid-cols-12 mobile:max-xl:grid-cols-1 grid-rows-12 gap-2 flex-grow">

                <Card style="col-span-3 mobile:max-xl:col-span-1 mobile:max-xl:h-96 row-span-4 p-6">
                    <h5 className="mb-5 text-xl font-bold tracking-tight">
                        Ranking
                    </h5>
                    <p className="text-5xl font-bold">1335</p>
                </Card>
                <Card style="col-span-3 mobile:max-xl:col-span-1 mobile:max-xl:h-96 row-span-4 p-6 "></Card>
                <Card style="col-span-3 mobile:max-xl:col-span-1 mobile:max-xl:row-span-8 row-span-4 p-6"></Card>
                <Card style="col-span-2 mobile:max-xl:col-span-1 mobile:max-xl:h-96 row-span-12 p-6">
                </Card>
                <Card style="col-span-6 mobile:max-xl:col-span-1 mobile:max-xl:h-96 row-span-8 p-6">
                    <BarChart />
                </Card>
                <Card style="col-span-3 mobile:max-xl:col-span-1 mobile:max-xl:h-96 mobile:max-xl:mb-10 row-span-8 p-6">
                    <h5 className="mb-2 text-xl font-bold tracking-tight">
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
