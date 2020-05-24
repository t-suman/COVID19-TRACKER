import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const Cards = (props) => {
  if (!props.data.confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          sm={3}
          className={[styles.card, styles.infected].join(" ")}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infectedd
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.confirmed.value}
                duration={props.data.confirmed.value / 2000000}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active caes of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          sm={3}
          className={[styles.card, styles.recovered].join(" ")}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.recovered.value}
                duration={props.data.recovered.value / 2000000}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          sm={3}
          className={[styles.card, styles.deaths].join(" ")}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.deaths.value}
                duration={props.data.deaths.value / 2000000}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
