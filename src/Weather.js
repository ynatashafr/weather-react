import React from "react";

export default function Weather() {
  return (
    <form>
      <div className="row">
        <div className="col"></div>
        <div className="col-6  container-border">
          <div className="col top-div">
            <h1>10/09/2022</h1>
            <h2>City</h2>

            <form className="form-inline">
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="search"
                  className="form-control rounded-pill"
                  aria-describedby="cityHelp"
                  placeholder="Enter City"
                />
              </div>
              <button
                type="submit"
                Value="Search"
                className="btn btn-primary mb-2 Small shadow"
              >
                Search
              </button>
            </form>
          </div>
          <div className="col row">
            <div className="col day">
              <img src="" alt="Clear" />
              <br />
              <span className="temperature"></span>
              <strong>New York</strong>
              <br />
              20C°
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
        <a href="https://github.com/ynatashafr/My-weather-app">
          Open-source code{" "}
        </a>
        By Natasha Figueroa
      </div>
    </form>
  );
}
