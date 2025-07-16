import { motion } from "motion/react";
import { div } from "motion/react-client";
import { useState } from "react";
import Slider from "./Slider";

function SettingOption(props: any) {
  const [stat, toggleStat] = useState(0);
  if (props.descrip == "Dark Mode") {
    var modals = document.getElementsByClassName("modal-type");
    if (stat == 0) {
      document
        .getElementsByClassName("app")[0]
        .classList.remove("dark-background");
      document
        .getElementsByClassName("navigation")[0]
        .classList.remove("dark-background-nav");
      if (modals.length > 0) {
        modals[0].classList.remove("dark-background");
      }
    } else if (stat == 1) {
      document
        .getElementsByClassName("app")[0]
        .classList.add("dark-background");
      document
        .getElementsByClassName("navigation")[0]
        .classList.add("dark-background-nav");
      if (modals.length > 0) {
        modals[0].classList.add("dark-background");
      }
    }
  }
  const Component = (props: any) => <div>{props.settingComponent}</div>;

  return (
    <motion.div whileTap={{ scale: 1 }}>
      <div className="setting-object">
        <span className="setting-description">{props.descrip}</span>
        <Slider stat={stat} toggleStat={toggleStat}></Slider>
      </div>
    </motion.div>
  );
}

export default SettingOption;
