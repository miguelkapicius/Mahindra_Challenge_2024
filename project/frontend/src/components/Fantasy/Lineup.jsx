
import { LineupPilotCard } from "./LineupPilotCard";

export function Lineup() {
    const pilots = [
        {
            position: 1,
            firstName: "Jake",
            lastName: "Dennis",
            team: "Andretti",
            country: "GB",
            image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/candid/small/6c47b61a-5bb4-4ae4-9e0a-63a411de0782.png",
            price: 150.00
        },
        {
            position: 2,
            firstName: "Stoffel",
            lastName: "Vandoorne",
            team: "Penske",
            country: "BE",
            image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/candid/small/3f4d9ccc-0453-410c-8542-225bd2ebf280.png",
            price: 130.00
        },
        {
            position: 3,
            firstName: "Sérgio",
            lastName: "Sette Câmara",
            team: "ERT",
            country: "BR",
            image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/candid/small/b768b851-5611-40be-8687-a0974e3d2754.png",
            price: 110.00
        },
        {
            position: 4,
            firstName: "Robin",
            lastName: "Frijns",
            team: "Envision",
            country: "NL",
            image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/candid/small/ba3d3d66-41de-4b1e-bfd6-7f318b2ec2af.png",
            price: 110.00
        },
        {
            position: 5,
            firstName: "Joel",
            lastName: "Ericksson",
            team: "Envision",
            country: "SE",
            image: "https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/candid/small/ec44be2a-3898-425d-97ff-4c0857bdfcd9.png",
            price: 100.00
        },
        
    ];
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:col-span-2 gap-2 overflow-y-scroll h-max p-2 bg-zinc-900 rounded shadow-shape">
            {pilots.map((pilot) => (
                <LineupPilotCard
                    key={pilot.position}
                    image={pilot.image}
                    firstName={pilot.firstName}
                    lastName={pilot.lastName}
                    country={pilot.country}
                    team={pilot.team}
                    price={pilot.price}
                />
            ))}
        </div>
    );
}
// image, firstName, lastName, country, team, price