import React, { useState } from "react";
import WeatherInfo from "./Weatherinfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      visibility: response.data.visibility,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  const search = () => {
    const apiKey = "7477c64b4f44c38c61eb4a8445849157";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  };

  const handleSubmit = (event) => {
    console.log("submitted");
    event.preventDefault();
    search();
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6  container-border">
            <div className="col top-div">
              <form className="form-inline" onSubmit={handleSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="search"
                    className="form-control rounded-pill"
                    aria-describedby="cityHelp"
                    placeholder="Enter City"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <button
                  type="submit"
                  value="Search"
                  className="btn mb-2 Small shadow"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="col row">
              <div className="col day">
                <WeatherInfo data={weatherData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
