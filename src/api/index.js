import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const releventData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return releventData;
  } catch (err) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const releventData = data.map((dailyData) => {
      return {
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      };
    });
    return releventData;
  } catch (err) {}
};
