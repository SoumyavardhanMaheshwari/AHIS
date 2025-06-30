import { motion } from "motion/react";
import { useState } from "react";

import { select } from "motion/react-client";
import SettingOption from "./SettingOption";
import Slider from "./Slider";

function SettingModal(props: any) {
  var settingOptions = [
    ["Dark Mode", 1, Slider],
    ["Remember Timer", 2, Slider],
  ];
  function settingCallback(id: any) {}
  if (props.settingState) {
    return (
      <div className="setting-container">
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="setting">
            <span
              className="cross-span"
              onClick={() => {
                props.settingState
                  ? document
                      .getElementsByClassName("setting-container")[0]
                      .classList.add("vanish")
                  : document
                      .getElementsByClassName("setting-container")[0]
                      .classList.remove("vanish");
                setTimeout(() => {
                  props.toggle(!props.settingState);
                }, 500);
              }}
            >
              <motion.button
                whileTap={{ scale: 0.7 }}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                }}
              >
                <h1 className="cross">X</h1>
              </motion.button>
            </span>
            <div className="setting-content">
              <h1>Settings</h1>

              <div className="setting-options">
                <div className="setting-options-container">
                  {settingOptions.map((setting: any) => (
                    <SettingOption
                      descrip={setting[0]}
                      key={setting[1]}
                      id={setting[1]}
                      settingComponent={setting[2]}
                      settingClick={settingCallback}
                    ></SettingOption>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  } else {
    return null;
  }
}

export default SettingModal;
