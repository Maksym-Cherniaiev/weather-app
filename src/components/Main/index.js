import React from "react";
import "./index.sass";

import ShowWeather from "./getWeather";

function Main() {
  return (
    <main>
      <h3 className="title">current weather</h3>
      <ShowWeather />
    </main>
  );
}

export default Main;