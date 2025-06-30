import "./control.css";
import edit from "./assets/edit.png";
import power from "./assets/power.png";
import timer from "./assets/timer.png";
import increase from "./assets/increase.png";
import decrease from "./assets/decrease.png";
import TimeDialPicker from "./TimeDial";
import { motion } from "motion/react";
import { useState } from "react";

function ControlPanel(props: any) {
  const [powerStatus, setPowerStatus] = useState(0);
  var parentClasses: string | undefined;
  var [panelName, setPanelName] = useState(props.panelName);
  var [timerTime, setTimerTime] = useState(props.timerTime);

  if (powerStatus == 0) {
    parentClasses = "controlParent controlRed";
  } else {
    parentClasses = "controlParent controlGreen";
  }
  function click(id: any) {
    props.clickHandler(id);
    console.log(id);
    if (id == 2) {
      setPanelName(prompt("Name:", "Smart Home 1"));
    } else if (id == 4) {
      if (timerTime <= 55) {
        setTimerTime(timerTime + 5);
        // for (let i = 1; i < 6; i++) {
        //   setTimeout(() => {
        //     setTimerTime(timerTime + i);
        //   }, i * 100);
        // }
      }
    } else if (id == 3) {
      if (timerTime >= 5) {
        setTimerTime(timerTime - 5);
        // for (let i = 1; i < 6; i++) {
        //   setTimeout(() => {
        //     setTimerTime(timerTime - i);
        //   }, i * 100);
        // }
      }
    }
  }
  return (
    <div className="flexdiv">
      <div className={parentClasses}>
        <div className="vertical1">
          <motion.div
            style={{
              borderRadius: "100%",
            }}
            animate={{
              boxShadow: powerStatus
                ? "0 0 10px rgb(132, 255, 167)"
                : "0 0 10px rgb(250, 76, 18,0.6)",
            }}
            transition={{
              repeat: !powerStatus ? 10 : 0,
              repeatType: "reverse",
              duration: 0.8,
            }}
          >
            <span
              onClick={() => {
                click(1);
                setPowerStatus(Number(!powerStatus));
              }}
            >
              <img src={power} alt="" />
            </span>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.7 }}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
            }}
          >
            <span onClick={() => click(2)}>
              <img src={edit} alt="" />
            </span>
          </motion.button>
        </div>
        <div className="vertical2">{panelName}</div>
        <div className="vertical3">
          <img src={timer} className="timer" alt="" />
        </div>
        <div className="vertical4">
          <motion.button
            whileTap={{ scale: 0.8 }}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
            }}
          >
            <span onClick={() => click(3)}>
              <img src={decrease} alt="" />
            </span>
          </motion.button>

          <motion.div
            key={timerTime} // this re-triggers animation when timer changes
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <p>{String(timerTime) + "min"}</p>
          </motion.div>
          <motion.button
            whileTap={{ scale: 1.2 }}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
            }}
          >
            <span onClick={() => click(4)}>
              <img src={increase} alt="" />
            </span>
          </motion.button>

          {/* <TimeDialPicker></TimeDialPicker> */}
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
