import React from "react";
//import Cards from "./components/Cards/Cards";
//import Charts from "./components/Charts/Charts";
//import CountryPicker from "./components/CountryPicker/CountryPicker";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchDailyData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    dailyData: [],
    country: "",
  };

  componentDidMount = async () => {
    const fetchedData = await fetchData(this.state.country);
    const fetchedDailyData = await fetchDailyData();
    this.setState({ data: fetchedData, dailyData: fetchedDailyData });
    //console.log(this.state.dailyData);
  };
  countryChangeListener = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ country: country, data: fetchedData });
  };
  render() {
    const { data, dailyData, country } = this.state;
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://i.ibb.co/7QpKsCX/image.png"
          alt="COVID.img"
        />

        <Cards data={data} />

        <CountryPicker countryChangeListener={this.countryChangeListener} />

        <Charts dailyData={dailyData} data={data} country={country} />
      </div>
    );
  }
}
export default App;
