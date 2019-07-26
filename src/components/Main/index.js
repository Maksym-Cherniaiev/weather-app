import React from "react";
import "./index.sass";

import WeatherInfo from "./render-weather-info";

function Main() {
  return (
    <main>
      <h3 className="title">current weather in city</h3>
      <WeatherInfo />
    </main>
  );
}

export default Main;