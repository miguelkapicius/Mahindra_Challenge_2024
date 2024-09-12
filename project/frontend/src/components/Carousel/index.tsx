
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const cards: {img_url: string, title: string}[] = [
  {
    img_url: "https://static-files.formula-e.pulselive.com/badges/fa97d2e7-02ca-4983-a930-4fdaa245a852.svg",
    title: "Mahindra Racing",
  },
  {
    img_url: "https://static-files.formula-e.pulselive.com/badges/c57e46c4-8163-44f6-9c0d-b74579d51000.svg",
    title: "Mahindra Racing",
  },
  {
    img_url: "https://static-files.formula-e.pulselive.com/badges/c63aedad-a141-4ebc-9794-41a37909ef0c.svg",
    title: "Mahindra Racing",
  },
  {
    img_url: "https://static-files.formula-e.pulselive.com/badges/c63aedad-a141-4ebc-9794-41a37909ef0c.svg",
    title: "Mahindra Racing",
  },
]

export function CarouselDisplay() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-1/3"
    >
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/6">
            <div className="p-1">
              <Card className="bg-destructive-foreground">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img className="p-2 w-full" src={card.img_url} alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}
