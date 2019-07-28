import React from "react";

function Temp( {temp_c, temp_f} ) {
  return (
    <section className="temp">
      <span className="temp_current">tempereture C: { temp_c }</span>
      <span className="temp_feel">tempereture F: { temp_f }</span>
    </section>
  );
}

export default Temp;