import React from "react";

function Temp(props) {
  return (
    <section className="temp">
      <span className="temp_current">tempereture: { props.temp }</span>
      <span className="temp_feel">feels like: { props.temp_min }</span>
    </section>
  );
}

export default Temp;