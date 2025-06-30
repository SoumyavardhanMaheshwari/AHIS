import { useState } from "react";

function Slider(props: any) {
  const [position, setPosition] = useState(0);
  if (position) {
    var slideState = "checkbox slide-on";
  } else {
    var slideState = "checkbox";
  }
  return (
    <label
      className="switch"
      onClick={() => {
        setPosition(Number(!position));
      }}
    >
      <span className={slideState}></span>
      <span className="slider round"></span>
    </label>
  );
}

export default Slider;
