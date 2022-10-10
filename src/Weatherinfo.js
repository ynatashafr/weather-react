import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

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
          <div className="icon float-left">
            <WeatherIcon code={props.data.icon} size={54} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
          <br />
        </div>
        <div className="details col">
          <ul>
            <li>Humidity:</li>
            <li>Visivility:</li>
            <li>Wind:</li>
            <li>Description:</li>
          </ul>
        </div>
        <div className="detailsResponse col font-weight-bold">
          <ul>
            <li>{props.data.humidity}%</li>
            <li>{props.data.visibility}</li>
            <li>{props.data.wind}km/h</li>
            <li>{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
