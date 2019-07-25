import React from "react";

function Extra( props ) {
  return (
    <section className="extra">
      <span className="extra_humidity">humidity: { props.humidity }</span>
      <span className="extra_visibility">visibility:</span>
      <span className="extra_pressure">pressure: { props.pressure }</span>
    </section>
  );
}

export default Extra;