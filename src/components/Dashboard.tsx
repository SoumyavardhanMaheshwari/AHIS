import "./dashboard.css";
import DashboardItem from "./DashboardItem";
import stopwatch from "./assets/stopwatch.png";
import temp from "./assets/temp.png";
import drop from "./assets/drop.png";
import wind from "./assets/wind.png";
import { fetchWeatherApi } from "openmeteo";
import { useState, useEffect } from "react";

async function fetchWeather() {
  const params = {
    latitude: 28.6519,
    longitude: 77.2315,
    current: ["temperature_2m", "relative_humidity_2m", "wind_speed_10m"],
    timezone: "auto",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const current = response.current()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      windSpeed10m: current.variables(2)!.value(),
    },
  };

  // `weatherData` now contains a simple structure with arrays for datetime and weather data

  return weatherData;
}

function Dashboard(props: any) {
  const [weatherState, setWeatherState] = useState<string[]>(["", "", "", ""]);
  fetchWeather().then((weatherData) => {
    const temp = `${weatherData.current.temperature2m.toFixed(1)}° C`;
    const humidity = `${weatherData.current.relativeHumidity2m}%`;
    const wind = `${weatherData.current.windSpeed10m.toFixed(1)} m/s`;
    const time = new Date(weatherData.current.time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setWeatherState([temp, humidity, wind, time]);
  });
  return (
    <div className="dashboard">
      <DashboardItem image={temp} info={weatherState[0]}></DashboardItem>
      <DashboardItem image={drop} info={weatherState[1]}></DashboardItem>
      <DashboardItem image={stopwatch} info={weatherState[3]}></DashboardItem>
      <DashboardItem image={wind} info={weatherState[2]}></DashboardItem>
    </div>
  );
}

export default Dashboard;
