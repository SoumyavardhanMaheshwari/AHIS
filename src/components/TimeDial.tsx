import CircularSlider from "@fseehawer/react-circular-slider";
import { useState } from "react";

function TimeDialPicker() {
  const [time, setTime] = useState(10);

  return (
    <CircularSlider
      label=""
      width={75}
      min={0}
      max={60}
      dataIndex={time}
      onChange={(value) => setTime(Number(value))}
      appendToValue="min"
      knobColor="#000"
      progressColorFrom="#000"
      progressColorTo="#000"
      trackColor="#ccc"
      labelColor="#000"
      valueFontSize="0.7rem"
    />
  );
}

export default TimeDialPicker;
