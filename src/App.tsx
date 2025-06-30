import "./App.css";
import Navigation from "./components/Navigation.tsx";
import Greeting from "./components/Greeting.tsx";
import ControlPanel from "./components/ControlPanel.tsx";
import WeatherStrip from "./components/WeatherStrip.tsx";
import Dashboard from "./components/Dashboard.tsx";
import TimeDialPicker from "./components/TimeDial.tsx";
import { motion } from "motion/react";
import WifiModal from "./components/WifiModal.tsx";
import { useState } from "react";
import SettingModal from "./components/SettingModal.tsx";
import Slider from "./components/Slider.tsx";

function App() {
  const [wifiMenu, enableWifiMenu] = useState(0);
  const [settingMenu, enableSettingMenu] = useState(0);

  var controlName: string | null = "Smart Home 1";
  const navClick = (value: number) => {
    console.log("navbar option clicked");
    if (value == 2) {
      enableWifiMenu(Number(!wifiMenu));
    } else if (value == 3) {
      enableSettingMenu(Number(!settingMenu));
    }
  };
  const controlClick = (value: number) => {
    console.log("control panel option clicked");
  };
  const wifiCallback = (value: number) => {
    console.log("selected wifi:" + String(value));
  };

  const settingClick = (value: number) => {
    console.log("setting:" + String(value));
  };

  return (
    <div className="">
      <Navigation clickHandler={navClick}></Navigation>
      <motion.div
        initial={{ opacity: 0.3, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Greeting name="XYZ"></Greeting>
      </motion.div>

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

      <WifiModal
        toggle={enableWifiMenu}
        menuState={wifiMenu}
        wifiOptions={[
          ["wifi1", 1],
          ["wifi23", 23],
          ["wifi5", 5],
          ["wifi1", 2],
          ["wifi23", 3],
          ["wifi5", 8],
          ["wifi1", 6],
        ]}
        wifiCallback={wifiCallback}
      ></WifiModal>
      <SettingModal
        toggle={enableSettingMenu}
        settingState={settingMenu}
      ></SettingModal>
    </div>
  );
}

export default App;
