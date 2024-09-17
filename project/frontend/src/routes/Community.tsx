import { CreatePost } from "@/components/Community/CreatePost";
import { Posts } from "@/components/Community/Posts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Community() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 overflow-y-hidden">
            <main className="col-span-3 space-y-4 overflow-y-auto pb-6">
                <CreatePost />
                <Posts />
            </main>
            <aside className="col-span-1 hidden md:block">
                <Card>
                    <CardContent className="p-2">
                        <img
                        className="rounded-t-xl"
                            src="https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZHxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""
                        />
                    </CardContent>
                    <CardFooter className="p-2 flex flex-col gap-6 items-start">
                        <span className="text-left text-muted-foreground text-sm">Discord Community</span>
                        <Button className="w-full">
                            Join Community
                        </Button>
                    </CardFooter>
                </Card>
            </aside>
        </section>
    );
}
