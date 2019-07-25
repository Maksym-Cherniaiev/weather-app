import React from "react";

import City from "./main components/City";
import Temp from "./main components/Temp";
import Extra from "./main components/Extra";

import getLocationByCity from "../../api/geocodeApi";
import getWeatherByLocation from "../../api/weatherApi";

class WeatherInfo extends React.Component {
  constructor() {
    super();
    this.location = getLocationByCity();
    this.state = {
      weatherData: {}
    }
  }
  
  async getWeatherData() {
    const weatherData = await getWeatherByLocation(this.location);
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