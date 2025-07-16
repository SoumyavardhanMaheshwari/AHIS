import "./weather.css";
import sunny from "./assets/sunny.png";
import rain from "./assets/rain.png";
import heavyRain from "./assets/heavyRain.png";
import thunderstorm from "./assets/thunderstorm.png";
import lightningCloud from "./assets/lightningCloud.png";
import cloud from "./assets/cloud.png";
var weatherimgs = [sunny, cloud, rain, heavyRain, lightningCloud, thunderstorm];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function DayWeather(props: any) {
  return (
    <div>
      <img src={weatherimgs[props.image]} alt="" />
      <p>{days[props.day]}</p>
    </div>
  );
}

export default DayWeather;
