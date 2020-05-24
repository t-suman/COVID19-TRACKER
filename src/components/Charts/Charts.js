import React from "react";
import styles from "./Charts.module.css";
import { Line } from "react-chartjs-2";
import { red } from "@material-ui/core/colors";

const Charts = (props) => {
  const lineChart = props.dailyData.length ? (
    <Line
      data={{
        labels: props.dailyData.map(({ date }) => date),
        datasets: [
          {
            data: props.dailyData.map(({ confirmed }) => confirmed),
            label: "Ifected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: props.dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  // if (props.dailyData.length === 0) {
  //   return null;
  // }

  return <div className={styles.container}>{lineChart}</div>;
};

export default Charts;
