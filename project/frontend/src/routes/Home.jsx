import Card from "../components/Card";

function Home() {
    return (
        <>
            <h1>Dashboard</h1>
            <section className="grid h-screen w-screen grid-cols-12 grid-rows-12">
                <Card styles="bg-slate-500 col-span-3 row-span-3" />
            </section>
        </>
    );
}

export default Home;
