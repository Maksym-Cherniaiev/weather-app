import React, { Component } from "react";

class SearchByCity extends Component {
  getValue = event => {
    if (event !== undefined) {
      if (event.key === "Enter") {
        this.props.onSearchChange(event.target.value);
      }
    }
  }

  render() {
    return (
      <>
        <section className="bar">
          <input className="bar_search" onKeyDown={ this.getValue } type="text" placeholder="Enter a city"></input>
        </section>
      </>
    );
  }
}

export default SearchByCity;