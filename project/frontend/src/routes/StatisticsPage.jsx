import { StatisticsTeam } from "../components/Statistics/StatisticsTeam";

export function StatisticsPage({ logo }) {
    return (
        <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-2 p-2">
                <StatisticsTeam
                    teamName="ABT CUPRA"
                    logo={
                        "https://static-files.formula-e.pulselive.com/badges/c57e46c4-8163-44f6-9c0d-b74579d51000.svg"
                    }
                />
                <StatisticsTeam
                    teamName="ANDRETTI"
                    logo={
                        "https://static-files.formula-e.pulselive.com/badges/0a33d76e-64e6-4823-b70b-27b79a48679c.svg"
                    }
                />
                <StatisticsTeam
                    teamName="ENVISION RACING"
                    logo={
                        "https://static-files.formula-e.pulselive.com/badges/c63aedad-a141-4ebc-9794-41a37909ef0c.svg"
                    }
                />
                <StatisticsTeam
                    teamName="JAGUAR TCS RACING"
                    logo={
                        "https://static-files.formula-e.pulselive.com/badges/05dab754-2899-411b-9c4e-72311a36cc9c.svg"
                    }
                />
            </div>
        </div>
    );
}
