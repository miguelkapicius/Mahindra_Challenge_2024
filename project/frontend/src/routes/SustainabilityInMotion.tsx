import { SustainabilityHero } from "@/components/Sustainability/SustainabilityHero";
import { reverse } from "dns";

const sustainabilityInMotion = [
    {
        title: "Sustainability In Motion",
        description:
            "Featuring a collective of world-class automotive manufacturers, renowned brands and highly skilled drivers, Season 9 expanded on previous achievements to run 16 races across urban circuits in 10 different cities around the world. Through innovative local initiatives, we continued to pursue better ways to address some of today's most critical societal challenges, reinforcing our commitment to expedite sustainable human development in the pursuit of a brighter future. With climate and nature stewardship being at the heart of our DNA, we worked to ensure Season 9 continued to push the boundaries of what is possible and laid the foundation for further progress in Season 10.",
    },
    {
        title: "Ecosystem",
        description:
            "Season after season, we leverage our values and the strength of the Formula E ecosystem of teams and partners to test and highlight innovative solutions. We use our platform to activate projects that can be scaled up to deliver solutions for a more sustainable lifestyle.",
        link: "https://www.formula-e.com/en/sustainability/ecosystem",
        image: "https://resources.formula-e.pulselive.com/photo-resources/2024/04/18/fbc52e41-4f7b-4fab-9d53-92920acef5c7/1019479891-LAT-20230210-EPS904_121957_ALS8298.jpg?width=1920&height=1080",
    },
    {
        title: "ABB Drivers of Progress",
        description:
            "The ABB Drivers of Progress video series is about ABB's partnership with the ABB FIA Formula E World Championship, showcasing the closely linked and exciting worlds of a global technology leader and the pioneering global, all-electric motor racing series. Together, these two high-performance partners are driving progress in technology that will help ensure a cleaner, more sustainable future for coming generations.",
        link: "https://global.abb/partnership/formula-e/en/technology-and-sustainability/drivers-of-progress",
        image: "https://resources.formula-e.pulselive.com/photo-resources/2024/03/05/5b5e78be-91fd-45f6-8390-d82bc8ba74d9/Spacesuit-AP-FE-MCeP-13-01-293383.jpg?width=1600&height=900",
        reverse: true,
    },
    {
        title: "How Formula E is driving for cleaner air",
        description:
            "The UN's International Day of Clean Air for Blue Skies emphasises that more must be done to improve air quality to protect human health. Using world-class motorsport, Formula E aims to transfer technology from race track to road and inspire innovation - accelerating the adoption of electric vehicles to drive the race for clean air forward.",
        link: "https://www.fiaformulae.com/en/news/507404",
        image: "https://resources.formula-e.pulselive.com/photo-resources/2023/09/06/f99514b9-3650-4e7c-8a9c-a9a93df3ba85/Air-pollution-1.jpg?width=1440&height=810",
    },
    {
        title: "World Environment Day beach clean-up",
        description:
            "In Season 9, we collaborated once again with the United Nations Environment Programme specifically around the topics of air pollution, electric mobility, biodiversity, plastics, the environment and sustainable lifestyles.Ahead of the Gulavit Jakarta E-Prix weekend, over 300 race team volunteers from the ABB FIA Formula E World Championship joined forces to clean up plastic and waste from a beach near the International Jakarta E-Prix Circuit. Volunteers came from race teams of ABT Cupra Formula E Team, Avalanche Andretti Formula E, Maserati MSG Racing, NIO 333 Racing Formula E Team and Mahindra Racing, in addition to partners from SABIC, Saudia and Bosch.",
        link: "https://www.fiaformulae.com/en/news/420926/drivers-clean-up-in-jakarta-ahead-of-world-environment-day",
        image: "https://resources.formula-e.pulselive.com/photo-resources/2023/06/03/05552baa-b0f5-4300-8c80-21e860b5ca73/1019662763-LAT-20230601-EPS910_153805SMG_6370.jpg?width=1600&height=900",
        reverse: true,
    },
];
export function SustainabilityInMotion() {
    return (
        <section className="space-y-12 md:space-y-24">
            {sustainabilityInMotion.map((item) => (
                <SustainabilityHero
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    image={item.image}
                    reverse={item.reverse}
                />
            ))}
        </section>
    );
}
