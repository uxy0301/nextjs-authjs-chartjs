"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [12, 6, 5, 4, 2],
      label: "# of Votes",
      borderWidth: 0,
      cutout: "70%",
      backgroundColor: [
        "rgba(79, 70, 229, 1)",
        "rgba(99, 102, 241, 1)",
        "rgba(129, 140, 248, 1)",
        "rgba(165, 180, 252, 1)",
        "rgba(199, 210, 254, 1)",
        "rgba(224, 231, 255, 1)",
      ],
    },
  ],
};

export default function Chart() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // width: "80vw",
        height: "30vh",
      }}
    >
      <Doughnut data={data} />
    </div>
  );
}
