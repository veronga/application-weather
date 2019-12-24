import React, { Component } from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "4a72e8fac85f96fa767ebfe0107463ad";

class App extends Component {
  gettingWeather = async () => {
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}units=metric`
    );
    const data = await api_url.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
