import "./dashboard.css";
import stopwatch from "./assets/stopwatch.png";
import temp from "./assets/temp.png";
import drop from "./assets/drop.png";
import wind from "./assets/wind.png";

function Dashboard(props: any) {
  return (
    <div className="dashboard">
      <div>
        <img src={temp} alt="" />
        <p>{props.temp}</p>
      </div>
      <div>
        <img src={drop} alt="" />
        <p>{props.humidity}</p>
      </div>
      <div>
        <img src={wind} alt="" />
        <p>{props.wind}</p>
      </div>
      <div>
        <img src={stopwatch} alt="" />
        <p>{props.time}</p>
      </div>
    </div>
  );
}

export default Dashboard;
