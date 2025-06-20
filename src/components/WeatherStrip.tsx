import "./weather.css";
import DayWeather from "./DayWeather";
function WeatherStrip(props: any) {
  return (
    <div className="strip">
      <DayWeather
        image={props.weather[0]}
        day={props.initialDay % 7}
      ></DayWeather>
      <DayWeather
        image={props.weather[1]}
        day={(props.initialDay + 1) % 7}
      ></DayWeather>
      <DayWeather
        image={props.weather[2]}
        day={(props.initialDay + 2) % 7}
      ></DayWeather>
      <DayWeather
        image={props.weather[3]}
        day={(props.initialDay + 3) % 7}
      ></DayWeather>

      <DayWeather
        image={props.weather[4]}
        day={props.initialDay + 4}
      ></DayWeather>

      <DayWeather
        image={props.weather[5]}
        day={(props.initialDay + 5) % 7}
      ></DayWeather>

      <DayWeather
        image={props.weather[6]}
        day={(props.initialDay + 6) % 7}
      ></DayWeather>
    </div>
  );
}

export default WeatherStrip;
