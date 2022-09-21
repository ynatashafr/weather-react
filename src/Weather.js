import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      visibility: response.data.visibility,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "15/09/2022",
    });
  }

  if (weatherData.ready) {
    return (
      <form>
        <div className="row">
          <div className="col"></div>
          <div className="col-6  container-border">
            <div className="col top-div">
              <h1>{weatherData.date}</h1>

              <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="search"
                    className="form-control rounded-pill"
                    aria-describedby="cityHelp"
                    placeholder="Enter City"
                    autoFocus="on"
                  />
                </div>
                <button
                  type="submit"
                  Value="Search"
                  className="btn mb-2 Small shadow"
                >
                  Search
                </button>
              </form>
            </div>
            <div className="col row">
              <div className="col day">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
                <br />
                <strong>{weatherData.city}</strong>
                <br />
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°C</span>
                <br />
              </div>
              <div className="col">
                <ul>
                  <li>Humidity</li>
                  <li>Visivility</li>
                  <li>Wind</li>
                  <li>Description</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>{weatherData.humidity}%</li>
                  <li>{weatherData.visibility}</li>
                  <li>{weatherData.wind}km/h</li>
                  <li>{weatherData.description}</li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast"></div>
          </div>
          <div className="col"></div>
        </div>
        <div className="github-url">
          <a href="https://github.com/ynatashafr/weather-react">
            Open-source code{" "}
          </a>
          By Natasha Figueroa
        </div>
      </form>
    );
  } else {
    const apiKey = "7477c64b4f44c38c61eb4a8445849157";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
}
