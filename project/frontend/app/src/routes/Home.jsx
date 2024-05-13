import { UserCircle, UserPlus } from "@phosphor-icons/react";
import Card from "../components/Card";
import Header from "../components/dashboard/Header";
import BarChart from "../components/dashboard/BarChart";
import Friend from "../components/Friend";
import SlideShow from "../components/dashboard/SlideShow";

document.title = "E-Pit | Dashboard";

function Home() {
    return (
        <>
            <div className="flex gap-4 h-full">
                <Card style="w-3/4 h-full rounded-lg">
                    <Header />
                    <section className="grid h-full gap-2 grid-cols-2 grid-rows-7">
                        <article className="col-span-1 row-span-4 bg-secoundary rounded-lg">
                            <BarChart />
                        </article>
                        <article className="col-span-1 row-span-6 bg-secoundary rounded-lg">
                            <SlideShow />
                        </article>
                        <article className="col-span-1 row-span-2 bg-secoundary rounded-lg">
                        </article>
                    </section>
                </Card>
                <Card style="w-1/4 h-full rounded-lg">
                    <header className="flex justify-between items-center mb-10">
                        <h2 className="text-xl">Friends</h2>
                        <UserPlus
                            size={24}
                            className="cursor-pointer hover:text-primary duration-300"
                        />
                    </header>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Friend
                                points="3562"
                                avatar="https://i.pravatar.cc"
                            />
                        </li>
                        <li>
                            <Friend />
                        </li>
                        <li>
                            <Friend />
                        </li>
                    </ul>
                </Card>
            </div>
        </>
    );
}

export default Home;
