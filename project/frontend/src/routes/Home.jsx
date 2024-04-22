import Card from "../components/Card";

document.title = "E-Pit | Dashboard";

function Home() {
    return (
        <>
            <section className="grid h-full grid-cols-12 grid-rows-12 gap-8">
                <Card style="col-span-3 row-span-4"></Card>
                <Card style="col-span-3 row-span-4"></Card>
                <Card style="col-span-3 row-span-4"></Card>
                <Card style="col-span-2 row-span-12"></Card>
                <Card style="col-span-3 row-span-8"></Card>
                <Card style="col-span-3 row-span-8"></Card>
                <Card style="col-span-3 row-span-8">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Mahindra Challenge 2024
                    </h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
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
