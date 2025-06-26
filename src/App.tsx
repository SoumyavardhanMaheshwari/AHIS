import "./App.css";
import Navigation from "./components/Navigation.tsx";
import Greeting from "./components/Greeting.tsx";
import ControlPanel from "./components/ControlPanel.tsx";
import WeatherStrip from "./components/WeatherStrip.tsx";
import Dashboard from "./components/Dashboard.tsx";
import TimeDialPicker from "./components/TimeDial.tsx";

function App() {
  var controlName: string | null = "Smart Home 1";
  const navClick = (value: number) => {
    console.log("navbar option clicked");
  };
  const controlClick = (value: number) => {
    console.log("control panel option clicked");
  };

  return (
    <h1>
      <Navigation clickHandler={navClick}></Navigation>
      <Greeting name="XYZ"></Greeting>
      <ControlPanel
        panelName={controlName}
        timerTime={10}
        clickHandler={controlClick}
      ></ControlPanel>
      <WeatherStrip
        weather={[1, 1, 2, 1, 3, 1, 5]}
        initialDay={3}
      ></WeatherStrip>
      <Dashboard
        temp={"20॰ F"}
        humidity={"98%"}
        wind={"11kmph"}
        time={"10 min"}
      ></Dashboard>
    </h1>
  );
}

export default App;
