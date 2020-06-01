import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  try {
    let modified_url = url;
    if (country) modified_url = `${url}/countries/${country}`;
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(modified_url);

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

export const countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {}
};
