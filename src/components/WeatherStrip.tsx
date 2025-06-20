import "./weather.css";
import sunny from "./assets/sunny.png";
import rain from "./assets/rain.png";
import heavyRain from "./assets/heavyRain.png";
import thunderstorm from "./assets/thunderstorm.png";
import lightningCloud from "./assets/lightningCloud.png";
import cloud from "./assets/cloud.png";

var weatherimgs = [sunny, cloud, rain, heavyRain, lightningCloud, thunderstorm];
function WeatherStrip(props: any) {
  return (
    <div className="strip">
      <img src={weatherimgs[props.weather[0]]} alt="" />
      <img src={weatherimgs[props.weather[1]]} alt="" />
      <img src={weatherimgs[props.weather[2]]} alt="" />
      <img src={weatherimgs[props.weather[3]]} alt="" />
      <img src={weatherimgs[props.weather[4]]} alt="" />
      <img src={weatherimgs[props.weather[5]]} alt="" />
      <img src={weatherimgs[props.weather[6]]} alt="" />
    </div>
  );
}

export default WeatherStrip;
