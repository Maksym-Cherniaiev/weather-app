import React from "react";

import "./index.css";

function Header() {
  return (
    <section className="bar">
      <h1 className="bar_title">WEATHER</h1>
      <input className="bar_search" type="text" placeholder="Enter a city"></input>
    </section>
  );
}

export default Header;