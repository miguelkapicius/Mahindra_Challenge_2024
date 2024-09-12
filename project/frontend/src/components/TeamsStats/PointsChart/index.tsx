"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { IChartProps } from "@/Interfaces/IChartProps";

export function PointsChart({ color }: IChartProps) {
    const chartData = [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 285 },
        { month: "March", desktop: 237 },
        { month: "April", desktop: 203 },
        { month: "May", desktop: 209 },
        { month: "June", desktop: 264 },
    ];

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: `${color}`,
        },
    } satisfies ChartConfig;

    return (
        <Card className="w-full">
            <CardHeader className="items-center pb-4">
                <CardTitle>Radar Chart - Grid Filled</CardTitle>
                <CardDescription>
                    Showing total visitors for the last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[200px]"
                >
                    <RadarChart data={chartData}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <PolarGrid className="fill-[--color-desktop] opacity-20" />
                        <PolarAngleAxis dataKey="month" />
                        <Radar
                            dataKey="desktop"
                            fill="var(--color-desktop)"
                            fillOpacity={0.5}
                        />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-center justify-center gap-2 text-sm">
                <span className="text-7xl">200</span>
                <span>Total</span>
            </CardFooter>
        </Card>
    );
}
