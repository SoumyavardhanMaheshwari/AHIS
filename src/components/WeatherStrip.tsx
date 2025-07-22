import "./weather.css";
import DayWeather from "./DayWeather";
import { motion } from "motion/react";
import { fetchWeatherApi } from "openmeteo";
import { useState, useEffect } from "react";

async function fetchWeather() {
  const params = {
    latitude: 28.6519,
    longitude: 77.2315,
    daily: "weather_code",
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
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      windSpeed10m: current.variables(2)!.value(),
    },
    daily: {
      time: [
        ...Array(
          (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
        ),
      ].map(
        (_, i) =>
          new Date(
            (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
              1000
          )
      ),
      weatherCode: daily.variables(0)!.valuesArray()!,
    },
  };

  // `weatherData` now contains a simple structure with arrays for datetime and weather data
  for (let i = 0; i < weatherData.daily.time.length; i++) {
    console.log(
      weatherData.daily.time[i].toISOString(),
      weatherData.daily.weatherCode[i]
    );
  }
  const mappedWeather = weatherData.daily.weatherCode.map(mapWmoToImageIndex);
  return weatherData;
}

function mapWmoToImageIndex(code: number): number {
  if ([0, 1].includes(code)) return 0; // sunny
  if ([2, 3].includes(code)) return 1; // cloudy
  if ([51, 53, 55, 61, 63, 80, 81].includes(code)) return 2; // rain
  if ([65, 82].includes(code)) return 3; // heavyRain
  if ([95].includes(code)) return 4; // lightningCloud
  if ([96, 99].includes(code)) return 5; // thunderstorm
  return 1; // default to cloud
}
function WeatherStrip(props: any) {
  const [weatherImages, setWeatherImages] = useState<number[]>([]);

  useEffect(() => {
    fetchWeather().then((weatherData) => {
      const mapped = Array.from(weatherData.daily.weatherCode).map(
        mapWmoToImageIndex
      );
      setWeatherImages(mapped);
    });
  }, []);
  return (
    <div className="strip">
      {weatherImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.3, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 + 0.05 * index }}
        >
          <DayWeather image={image} day={(props.initialDay + index) % 7} />
        </motion.div>
      ))}
    </div>
  );
}

export default WeatherStrip;
