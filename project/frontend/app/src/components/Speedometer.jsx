import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

function getRandomNumber() {
  return Math.floor(Math.random() * (350 - 200) + 200);
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
  redColor: '#0D0D0D',
  yellowFrom: 250,
  yellowTo: 300,
  yellowColor: '#5271FF',
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
