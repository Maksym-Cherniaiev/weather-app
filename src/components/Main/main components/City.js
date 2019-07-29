import React from "react";

function upperCity(name) {
  if (typeof name === "string") {
    return name.toUpperCase();
  }
}

function City( {name, icon, alt} ) {
  return (
    <>
      <h3 className="title">current weather in location</h3>
      <h2>{ upperCity(name) }</h2>
      <div className="weather-icon">
        <img className="weather-icon_image" src={ icon } alt={ alt }></img>
      </div>
    </>
  );
}

export default City;