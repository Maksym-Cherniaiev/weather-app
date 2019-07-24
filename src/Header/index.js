import React from "react";

import "./index.sass";

function Header() {
  return (
    <header className="bar">
      <h1 className="bar_title">WEATHER</h1>
      <input className="bar_search" type="text" placeholder="Enter a city"></input>
    </header>
  );
}

export default Header;