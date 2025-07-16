import { motion } from "motion/react";
import { div } from "motion/react-client";
import { useState, useEffect } from "react";
import Task from "./Task";

function TaskView(props: any) {
  return (
    <div className="task-view">
      {props.schedules.map((task: any) => (
        <Task data={task}></Task>
      ))}
    </div>
  );
}

export default TaskView;
