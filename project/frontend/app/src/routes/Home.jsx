import { UserCircle, UserPlus } from "@phosphor-icons/react";
import Card from "../components/Card";
import Header from "../components/dashboard/Header";
import BarChart from "../components/dashboard/BarChart";
import Friend from "../components/Friend";

document.title = "E-Pit | Dashboard";

function Home() {
    return (
        <>
            <div className="flex gap-4 h-full">
                <Card style="w-3/4 h-full bg-transparent">
                    <Header />
                    <section className="flex h-full">
                        <Card style="w-2/3 h-1/2 px-0">
                            <BarChart />
                        </Card>
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
                            <Friend points="3562" avatar="https://i.pravatar.cc" />
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
