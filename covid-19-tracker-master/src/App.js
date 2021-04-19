import React, {useState} from "react";
import { Cards, CardsGlobal,  CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import {fetchDailyData} from "./api";
import coronaImage from "./images/image.png";
import Home from "./Components/Home/Home";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <br />
        <br />
        <CardsGlobal data={data} country={"Global"}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} country={country} />
        <Home />
      </div>
    );
  }


}

export default App;