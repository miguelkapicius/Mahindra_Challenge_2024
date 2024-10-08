import { usePilots } from "@/hooks/usePilots";
import { useState, useEffect } from "react";

export function Simulate() {
    const pilots = usePilots();
    const [simulatePilots, setSimulatePilots] = useState(() =>
        pilots.map((pilot, index) => ({ ...pilot, position: index + 1 }))
    );
    const [isRacing, setIsRacing] = useState(false);

    function startRace() {
        setIsRacing(true);
    }

    useEffect(() => {
        if (isRacing) {
            const interval = setInterval(() => {
                setSimulatePilots((prevPilots) =>
                    prevPilots
                        .map((pilot) => ({
                            ...pilot,
                            position: Math.max(
                                1,
                                pilot.position + (Math.random() > 0.5 ? -1 : 1)
                            ), // Evita posição 0
                        }))
                        .sort((a, b) => a.position - b.position)
                );
            }, 1000);

            setTimeout(() => {
                clearInterval(interval);
                setIsRacing(false);
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [isRacing]);

    return (
        <div>
            <h1>Simulação de Corrida de Fórmula E</h1>
            <button onClick={startRace} disabled={isRacing}>
                {isRacing ? "Correndo..." : "Iniciar Corrida"}
            </button>
            <ul>
                {simulatePilots.map((pilot) => (
                    <li key={pilot._id}>
                        {pilot.firstname} - Position: {pilot.position}
                    </li>
                ))}
            </ul>
        </div>
    );
}
