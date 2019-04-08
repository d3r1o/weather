import React, { Component } from "react";
import "./App.css";

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=Rostov-on-Don&appid=53fe5e1d33057247967f8e5e9263ac8f&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Загрузка</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
         Погода в Ростове-на-Дону 
        </h1>
        <p>Температура: {weatherData.main.temp}°</p>
        <img src={iconUrl} alt={weatherData.description} />
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <WeatherDisplay key={activePlace} />
      </div>
    );
  }
}

export default App;