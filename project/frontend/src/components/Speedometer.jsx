import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

function getRandomNumber() {
  return Math.random() * 350;
}

export function getData() {
  return [
    ["Label", "Value"],
    ["Km/h", getRandomNumber()],
  ];
}

export const options = {
  width: 150,
  height: 150,
  redFrom: 300,
  redTo: 350,
  yellowFrom: 250,
  yellowTo: 300,
  minorTicks: 3,
  max: 350,
  animation:{
    duration: 700,
  },
};

export function Speedometer() {
  const [data, setData] = useState(getData);

  useEffect(() => {
    const id = setInterval(() => {
      setData(getData());
    }, 500);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <Chart
      chartType="Gauge"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
