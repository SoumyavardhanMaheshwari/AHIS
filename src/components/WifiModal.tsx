import { motion } from "motion/react";
import { useState } from "react";
import wifi from "./assets/wifi.png";
import WifiOption from "./WifiOption";
import { select } from "motion/react-client";

function WifiModal(props: any) {
  function selectWifi(id: any) {
    props.wifiCallback(id);
  }
  if (props.menuState) {
    return (
      <div className="modal-container">
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="modal">
            <span
              className="cross-span"
              onClick={() => {
                props.menuState
                  ? document
                      .getElementsByClassName("modal-container")[0]
                      .classList.add("vanish")
                  : document
                      .getElementsByClassName("modal-container")[0]
                      .classList.remove("vanish");
                setTimeout(() => {
                  props.toggle(!props.menuState);
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
            <div className="wifi-content">
              <h1>WIFI Hub</h1>
              <img src={wifi} alt="" />
              <div className="wifi-options">
                <div className="wifi-options-container">
                  {props.wifiOptions.map((wifiObject: any) => (
                    <WifiOption
                      name={wifiObject[0]}
                      key={wifiObject[1]}
                      id={wifiObject[1]}
                      selectWifi={selectWifi}
                    ></WifiOption>
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

export default WifiModal;
