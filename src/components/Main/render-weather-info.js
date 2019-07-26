import React from "react";

import City from "./main components/City";
import Temp from "./main components/Temp";
import Extra from "./main components/Extra";

import getUserLocation from "../../api/currentPosition";
import getLocationByCityName from "../../api/geocodeApi";
import getWeatherByLocation from "../../api/weatherApi";

class WeatherInfo extends React.Component {
  constructor() {
    super();
    this.userCity = "";
    // this.currentLocation = getCurrentLocation();
    this.state = {
      weatherData: {}
    }
  }

  async checkUserValue() {
    let cityLocation;
    if (this.userCity.length > 0) {
      cityLocation = await getLocationByCityName(this.userCity);
    } else if (this.userCity === "") {
      cityLocation = await getUserLocation();
      debugger;
    }
    return cityLocation;
  }

  async getWeatherData() {
    const coordinates = await this.checkUserValue();
    const weatherData = await getWeatherByLocation(coordinates);
    this.setState({
      weatherData
    });
  }

  componentDidMount() {
    this.getWeatherData();
  }

  render() {
    const {location, temp, extra} = this.state.weatherData;
    return (
      <>
        <City name = { location }></City>
        <Temp { ...temp }></Temp>
        <Extra { ...extra }></Extra>
      </>
    )
  }
}

export default WeatherInfo;