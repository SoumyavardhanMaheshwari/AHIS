import { motion } from "motion/react";
import { div } from "motion/react-client";
import { useState } from "react";

function WifiOption(props: any) {
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <div
        className="wifi-object"
        onClick={() => {
          props.selectWifi(props.id);
        }}
      >
        {props.name}
      </div>
    </motion.div>
  );
}

export default WifiOption;
