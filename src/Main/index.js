import React from "react";
import "./index.sass";

import Temp from "./Temp";
import Extra from "./Extra";

function Main() {
  return (
    <main>
      <h3 className="title">current weather</h3>
      <h2 className="city">LVIV</h2>
      <Temp></Temp>
      <Extra></Extra>
    </main>
  );
}

export default Main;