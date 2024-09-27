import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useTeams } from "@/hooks/useTeams";

export function CarouselDisplay() {
    const teams = useTeams();
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-1/3"
        >
            <CarouselContent>
                {teams.map((card) => (
                    <CarouselItem
                        key={card._id}
                        className="basis-1/2 md:basis-1/3 lg:basis-1/6"
                    >
                        <div className="p-1">
                            <Card className="bg-destructive-foreground">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img
                                        className="p-2 w-full"
                                        src={card.logo}
                                        alt=""
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
        </Carousel>
    );
}
