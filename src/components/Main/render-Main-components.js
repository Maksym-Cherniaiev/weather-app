import React from "react";

import Search from "./main components/Search";
import City from "./main components/City";
import Temp from "./main components/Temp";
import Extra from "./main components/Extra";

import getUserLocation from "../../api/currentPosition";
import getLocationByCityName from "../../api/geocodeApi";
import getWeatherByLocation from "../../api/weatherApi";

class WeatherInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: {},
      searchTerm: ""
    }
  }

  heandleSearchValue = searchTerm => {
    this.setState({
      searchTerm
    }, this.getWeatherData);
  }

  async checkUserValue() {
    let cityLocation;
    if (this.state.searchTerm.length > 0) {
      cityLocation = await getLocationByCityName(this.state.searchTerm);
    } else if (this.state.searchTerm === "") {
      cityLocation = await getUserLocation();
    }
    return cityLocation;
  }

  async getWeatherData() {
    const data = await this.checkUserValue();
    if (typeof data === "string") {
      this.setState({
        weatherData: {
          location: {
            name: data
          }
        } 
      });
    } else if (typeof data === "object") {
      const weatherData = await getWeatherByLocation(data);
      this.setState({
        weatherData
      });
    }
  }

  componentDidMount() {
    this.getWeatherData();
  }

  render() {
    const {location, temp, extra} = this.state.weatherData;
    return (
      <>
        <Search onSearchChange = { this.heandleSearchValue }></Search>
        <City { ...location }></City>
        <Temp { ...temp }></Temp>
        <Extra { ...extra }></Extra>
      </>
    )
  }
}

export default WeatherInfo;