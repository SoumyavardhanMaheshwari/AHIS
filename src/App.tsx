import "./App.css";
import Navigation from "./components/Navigation.tsx";
import Greeting from "./components/Greeting.tsx";
import ControlPanel from "./components/ControlPanel.tsx";
import WeatherStrip from "./components/WeatherStrip.tsx";
import Dashboard from "./components/Dashboard.tsx";
import TimeDialPicker from "./components/TimeDial.tsx";
import { motion } from "motion/react";
import WifiModal from "./components/WifiModal.tsx";
import { useState, useEffect } from "react";
import SettingModal from "./components/SettingModal.tsx";
import Slider from "./components/Slider.tsx";
import Picker from "react-mobile-picker";
import ScheduleMenu from "./components/ScheduleMenu.tsx";

function App() {
  const dateToday = new Date();
  const [wifiMenu, enableWifiMenu] = useState(0);
  const [settingMenu, enableSettingMenu] = useState(0);
  const [scheduleMenuState, toggleScheduleMenuState] = useState(0);

  type Schedule = {
    hour: number;
    minute: number;
    second: number;
    time?: string;
    date?: string;
    start_datetime: string;
    duration: string;
    [key: string]: any;
  };
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  async function sendPostRequest(data: any) {
    const hour = parseInt(data.hour);
    const minute = parseInt(data.minute);
    const second = parseInt(data.second);
    const start_datetime = data.start_datetime;
    const duration = data.duration;

    const payload = { start_datetime, duration, hour, minute, second };

    console.log("Sending payload:", payload);

    try {
      const res = await fetch("http://127.0.0.1:8000/schedule/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error("Backend rejected request:", responseData);
        throw new Error("Bad Request");
      }

      console.log("Successfully posted:", responseData);
      return responseData;
    } catch (err) {
      console.error("Error posting task:", err);
    }
  }
  function fetchScheduleList() {
    fetch("http://127.0.0.1:8000/schedule/")
      .then((response) => response.json())
      .then((data) => setSchedules(data))
      .catch((error) => console.error("Error fetching schedule:", error));
  }

  function refreshScheduleList() {
    fetchScheduleList();
  }
  useEffect(() => {
    fetchScheduleList();
  }, []);
  var controlName: string | null = "Smart Home 1";
  const navClick = (value: number) => {
    if (value == 2) {
      enableWifiMenu(Number(!wifiMenu));
    } else if (value == 3) {
      enableSettingMenu(Number(!settingMenu));
    }
  };
  const controlClick = (value: number) => {
    if (value == 4) {
      toggleScheduleMenuState(Number(!scheduleMenuState));
    }
  };
  const scheduleAddTask = (taskData: any) => {
    var startTime = taskData[0];
    var duration = taskData[1];
    var newSchedule = {
      hour: duration.hour,
      minute: duration.minute,
      second: duration.second,
      time: startTime.time,
      date: startTime.date,
      start_datetime: startTime.date + "T" + startTime.time + ":00Z",
      duration: duration.hour + ":" + duration.minute + ":" + duration.second,
    };

    for (const schedule in schedules) {
      if (schedules[schedule].start_datetime === newSchedule.start_datetime) {
        console.log("Schedule already exists for this time.");
        return;
      }
    }
    sendPostRequest(newSchedule).then((createdTask) => {
      if (createdTask) {
        fetchScheduleList();
      }
    });
  };
  const wifiCallback = (value: number) => {
    console.log("selected wifi:" + String(value));
  };

  const settingClick = (value: number) => {
    console.log("setting:" + String(value));
  };

  return (
    <div className="app">
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
        schedules={schedules}
        refreshTaskList={refreshScheduleList}
      ></ControlPanel>
      <WeatherStrip initialDay={dateToday.getDay()}></WeatherStrip>
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
        settingClick={settingClick}
      ></SettingModal>
      <ScheduleMenu
        scheduleMenuState={scheduleMenuState}
        toggleScheduleMenuState={toggleScheduleMenuState}
        scheduleAddTaskCallback={scheduleAddTask}
      ></ScheduleMenu>
    </div>
  );
}

export default App;
