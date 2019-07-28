import React from "react";

function Extra( {humidity, condition, pressure} ) {
  return (
    <section className="extra">
      <span className="extra_humidity">humidity: { humidity }</span>
      <hr></hr>
      <span className="extra_visibility">condition: { condition }</span>
      <hr></hr>
      <span className="extra_pressure">pressure: { pressure }</span>
    </section>
  );
}

export default Extra;