import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="col row">
        <div className="col day">
          <h1>{props.data.city}</h1>
          <h2>
            <FormattedDate date={props.data.date} />
          </h2>
          <br />
          <img src={props.data.iconUrl} alt={props.data.description} />

          <span className="temperature">
            {Math.round(props.data.temperature)}
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
            <li>{props.data.humidity}%</li>
            <li>{props.data.visibility}</li>
            <li>{props.data.wind}km/h</li>
            <li>{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>

      <div className="col"></div>

      <div className="github-url">
        <a href="https://github.com/ynatashafr/weather-react">
          Open-source code{" "}
        </a>
        By Natasha Figueroa
      </div>
    </div>
  );
}
