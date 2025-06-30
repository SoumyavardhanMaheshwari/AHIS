import { motion } from "motion/react";
import { div } from "motion/react-client";
import { useState } from "react";
import Slider from "./Slider";

function SettingOption(props: any) {
  const Component = (props: any) => <div>{props.settingComponent}</div>;
  return (
    <motion.div whileTap={{ scale: 1 }}>
      <div className="setting-object">
        <span className="setting-description">{props.descrip}</span>
        <Slider></Slider>
      </div>
    </motion.div>
  );
}

export default SettingOption;
