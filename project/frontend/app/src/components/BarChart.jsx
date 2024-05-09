import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "You", "Friends"],
  ["Today", 200, 180],
  ["Yesterday", 220, 210],
  ["02/05", 250, 240],
  ["01/05", 280, 270],
  ["30/04", 300, 290],
];

export const options = {
    title: "Your Points",
    backgroundColor: "transparent",
    colors: ["#5271FF", "#e2e8f0"],
    titleTextStyle: {
      color: "#e2e8f0",
      fontSize: 24,
    },
    legend: {
      textStyle: {
        color: "#e2e8f0",
      },
    },
    chartArea: {
        width: "70%",
    },
    hAxis: {
      textStyle: {
          color: "#e2e8f0", // Define a cor branca para o texto do eixo horizontal
      },
  },
  vAxis: {
      textStyle: {
          color: "#e2e8f0", // Define a cor branca para o texto do eixo vertical
      },
  },
};

export function BarChart() {
    return (
        <Chart
            chartType="BarChart"
            width="100%"
            height="100%"
            data={data}
            options={options}
        />
    );
}
