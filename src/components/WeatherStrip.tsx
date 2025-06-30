import "./weather.css";
import DayWeather from "./DayWeather";
import { motion } from "motion/react";
function WeatherStrip(props: any) {
  return (
    <div className="strip">
      {props.weather.map((image: string, index: number) => (
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
