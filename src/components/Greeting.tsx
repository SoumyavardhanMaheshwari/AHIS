import "./greeting.css";
import plant from "./assets/plant.png";
function Greeting(props: any) {
  return (
    <div className="flexdiv">
      <span id="greet">
        <div className="img">
          <img src={plant}></img>
        </div>
        <div className="greetingHeading">
          <h4>Hello {props.name}</h4>
        </div>
      </span>
    </div>
  );
}

export default Greeting;
