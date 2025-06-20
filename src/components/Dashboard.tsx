import "./dashboard.css";
import DashboardItem from "./DashboardItem";
import stopwatch from "./assets/stopwatch.png";
import temp from "./assets/temp.png";
import drop from "./assets/drop.png";
import wind from "./assets/wind.png";

function Dashboard(props: any) {
  return (
    <div className="dashboard">
      <DashboardItem image={temp} info={props.temp}></DashboardItem>
      <DashboardItem image={drop} info={props.humidity}></DashboardItem>
      <DashboardItem image={stopwatch} info={props.time}></DashboardItem>
      <DashboardItem image={wind} info={props.wind}></DashboardItem>
    </div>
  );
}

export default Dashboard;
