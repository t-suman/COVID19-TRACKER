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
  };

  componentDidMount = async () => {
    const fetchedData = await fetchData();
    const fetchedDailyData = await fetchDailyData();
    this.setState({ data: fetchedData, dailyData: fetchedDailyData });
    console.log(this.state.dailyData);
  };
  render() {
    const { data, dailyData } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />

        <CountryPicker />

        <Charts dailyData={dailyData} />
      </div>
    );
  }
}
export default App;
