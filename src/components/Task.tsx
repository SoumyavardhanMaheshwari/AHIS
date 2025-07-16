import { motion } from "motion/react";
import { div } from "motion/react-client";
import { useState } from "react";

function Task(props: any) {
  console.log(props.data);
  return (
    <motion.div>
      <div
        className="task"
        onClick={() => {
          //setup delete function here?;
        }}
      >
        <div className="task-datetime">
          {props.data.start_datetime.slice(0, 10)}
        </div>

        <div className="vertical-division"></div>
        <div className="task-duration">{props.data.duration}</div>
        <div className="vertical-division"></div>
      </div>
    </motion.div>
  );
}

export default Task;
