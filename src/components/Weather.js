import React from "react";
import moment from "moment";
import "./styles.css";
import { Button } from "semantic-ui-react";

// const refresh = () => {
//   Window.location.reload();
// };

const Weather = ({ weatherData }) => (
  <div className="main">
    <div className="top">
      <p className="header">{weatherData.name}</p>
      {/* <Button className="button" inverted color="blue" circular icon='refresh' onClick={refresh}></Button> */}
    </div>

    <div className="flex">
      <p className="day">
        Day: {moment().format("dddd")},<span>{moment().format("LL")}</span>
      </p>
      <p className="description">
        Description:{weatherData.weather[0].description}
      </p>
    </div>

    <div className="flex">
      <p className="temp">Temprature:{weatherData.main.temp} &deg;C</p>
      <p className="temp">Humidity: {weatherData.main.humidity}</p>
    </div>

    <div className="flex">
      <p className="sunrise-sunset">
        Sunrise:
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
      </p>
      <p className="sunrise-sunset">
        Sunset:
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
      </p>
    </div>
  </div>
);

export default Weather;
