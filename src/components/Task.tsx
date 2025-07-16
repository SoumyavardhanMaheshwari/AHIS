import { motion } from "motion/react";
import { div } from "motion/react-client";
import { useState } from "react";
import trash from "./assets/trashbin.png";

function Task(props: any) {
  function deleteTask(id: any) {
    props.taskDeletion(id);
  }

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
        <motion.button
          whileTap={{ scale: 1.2 }}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
          }}
        >
          <div
            className="delete-task"
            onClick={() => {
              deleteTask(props.data.id);
            }}
          >
            <img src={trash} alt="" />
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Task;
