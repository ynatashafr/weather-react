import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <form>
      <div className="row">
        <div className="col"></div>
        <div className="col-6  container-border">
          <div className="col top-div">
            <h1>10/09/2022</h1>

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
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Clear"
              />
              <br />
              <strong>New York</strong>
              <br />
              <span className="temperature">20</span>
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
                <li>70%</li>
                <li>Unlimited</li>
                <li>6km/h</li>
                <li>Extreme</li>
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
}
