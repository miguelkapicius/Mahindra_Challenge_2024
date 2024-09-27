"use client";

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

interface IPodiumsChartProps {
    color: string | undefined;
    data: Array<{ podium: Number; month: String }> | undefined;
}

export function PodiumsChart({ color, data }: IPodiumsChartProps) {
    console.log(data);
    const chartData = data;
    const chartConfig = {
        podium: {
            label: "podium",
            color: `${color}`,
        },
    } satisfies ChartConfig;

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Podiums</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Line
                            dataKey="podium"
                            type="natural"
                            stroke="var(--color-podium)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-podium)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Line>
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
