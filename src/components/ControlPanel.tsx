import "./control.css";
import edit from "./assets/edit.png";
import power from "./assets/power.png";
import timer from "./assets/timer.png";
import increase from "./assets/increase.png";
import decrease from "./assets/decrease.png";

function ControlPanel(props: any) {
  return (
    <div className="flexdiv">
      <div className="controlParent">
        <div className="vertical1">
          <img src={power} alt="" />
          <img src={edit} alt="" />
        </div>
        <div className="vertical2">{props.panelName}</div>
        <div className="vertical3">
          <img src={timer} className="timer" alt="" />
        </div>
        <div className="vertical4">
          <img src={decrease} alt="" />
          <p>{props.timer}</p>
          <img src={increase} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
