import "./control.css";
import edit from "./assets/edit.png";
import power from "./assets/power.png";
import timer from "./assets/timer.png";
import increase from "./assets/increase.png";
import decrease from "./assets/decrease.png";

function ControlPanel(props: any) {
  function click(id: any) {
    props.clickHandler(id);
    console.log(id);
  }
  return (
    <div className="flexdiv">
      <div className="controlParent">
        <div className="vertical1">
          <a href="#" onClick={() => click(1)}>
            <img src={power} alt="" />
          </a>
          <a href="#" onClick={() => click(2)}>
            <img src={edit} alt="" />
          </a>
        </div>
        <div className="vertical2">{props.panelName}</div>
        <div className="vertical3">
          <img src={timer} className="timer" alt="" />
        </div>
        <div className="vertical4">
          <a href="#" onClick={() => click(3)}>
            <img src={decrease} alt="" />
          </a>

          <p>{props.timer}</p>
          <a href="#" onClick={() => click(4)}>
            <img src={increase} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
