import "./App.css";
import Navigation from "./components/Navigation.tsx";
import Greeting from "./components/Greeting.tsx";
import ControlPanel from "./components/ControlPanel.tsx";
import WeatherStrip from "./components/WeatherStrip.tsx";
import Dashboard from "./components/Dashboard.tsx";
function App() {
  return (
    <h1>
      <Navigation></Navigation>
      <Greeting name="XYZ"></Greeting>
      <ControlPanel panelName="Smart Home 1" timer="10 min"></ControlPanel>
      <WeatherStrip weather={[0, 1, 2, 3, 4, 5, 0]}></WeatherStrip>
      <Dashboard></Dashboard>
    </h1>
  );
}

export default App;
