import "./weather.css";
import DayWeather from "./DayWeather";

function WeatherStrip(props: any) {
  return (
    <div className="strip">
      {props.weather.map((image: string, index: number) => (
        <DayWeather
          key={index}
          image={image}
          day={(props.initialDay + index) % 7}
        />
      ))}
    </div>
  );
}

export default WeatherStrip;
