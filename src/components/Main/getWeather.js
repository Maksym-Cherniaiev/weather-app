import React from "react";

import City from "./main components/City";
import Temp from "./main components/Temp";
import Extra from "./main components/Extra";
import Position from "../Header/geocode";

class ShowWeather extends React.Component {
  constructor() {
    super();
    this.url = "https://api.apixu.com/v1/current.json";
    this.apiKey = "2d7ebdd87bcf48e9b7f184126192507";
    this.state = {
      city: "",
      temp: "",
      temp_min: "",
      humidity: "",
      visibility: "",
      pressure: "",
      loading: true
    }
  }

  checkState() {
    if (this.state.loading === false) {
      return this.renderWeatherInfo();
    } else if (this.state.loading === true) {
      this.componentDidMount();
    }
  }

  renderWeatherInfo() {
    console.log(this.state);
    debugger;
    return (
      <>
        <City name = { this.state }></City>
        <Temp name = { this.state }></Temp>
        <Extra name = { this.state }></Extra>
      </>
    );
  }

  async componentDidMount() {
    const positionInfo = this.getPosition();
    const coordinates = positionInfo.results[0].geometry.location;
    await fetch(`${this.url}?key=${this.apiKey}&q=${coordinates.lat},${coordinates.lng}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        city: data.name,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        humidity: data.main.humidity,
        visibility: data.visibility,
        pressure: data.main.pressure
      });
      if (this.state.city !== "") {
        this.setState({
          loading: false
        });
      }
    });
    this.checkState();
  }  

  getPosition() {
    return Position;
  }

  render() {
    return this.checkState();
  }
}

export default ShowWeather;