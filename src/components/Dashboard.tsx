import "./dashboard.css";
import stopwatch from "./assets/stopwatch.png";
import temp from "./assets/temp.png";
import drop from "./assets/drop.png";
import wind from "./assets/wind.png";

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <img src={stopwatch} alt="" />
        <p>20° F</p>
      </div>
      <div>
        <img src={temp} alt="" />
        <p>98%</p>
      </div>
      <div>
        <img src={drop} alt="" />
        <p>112kmph</p>
      </div>
      <div>
        <img src={wind} alt="" />
        <p>10 min</p>
      </div>
    </div>
  );
}

export default Dashboard;
