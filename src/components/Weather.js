import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <d iv>
        {this.props.city && (
          <div>
            <p>
              Местоположение:{this.props.city},{this.props.country}
            </p>
            <p>Температура:{this.props.temp}</p>
            <p>Давление:{this.props.pressure}</p>
            <p>Заход солнца:{this.props.sunset}</p>
          </div>
        )}
      </d>
    );
  }
}

export default Weather;
