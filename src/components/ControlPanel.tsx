import "./control.css";
import edit from "./assets/edit.png";
import power from "./assets/power.png";
import timer from "./assets/timer.png";
import increase from "./assets/increase.png";
import decrease from "./assets/decrease.png";
import TimeDialPicker from "./TimeDial";
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
        for (let i = 1; i < 6; i++) {
          setTimeout(() => {
            setTimerTime(timerTime + i);
          }, i * 100);
        }
      }
    } else if (id == 3) {
      if (timerTime >= 5) {
        for (let i = 1; i < 6; i++) {
          setTimeout(() => {
            setTimerTime(timerTime - i);
          }, i * 100);
        }
      }
    }
  }
  return (
    <div className="flexdiv">
      <div className={parentClasses}>
        <div className="vertical1">
          <a
            href="#"
            onClick={() => {
              click(1);
              setPowerStatus(Number(!powerStatus));
            }}
          >
            <img src={power} alt="" />
          </a>
          <a href="#" onClick={() => click(2)}>
            <img src={edit} alt="" />
          </a>
        </div>
        <div className="vertical2">{panelName}</div>
        <div className="vertical3">
          <img src={timer} className="timer" alt="" />
        </div>
        <div className="vertical4">
          <a href="#" onClick={() => click(3)}>
            <img src={decrease} alt="" />
          </a>

          <p>{String(timerTime) + "min"}</p>
          <a href="#" onClick={() => click(4)}>
            <img src={increase} alt="" />
          </a>
          {/* <TimeDialPicker></TimeDialPicker> */}
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
