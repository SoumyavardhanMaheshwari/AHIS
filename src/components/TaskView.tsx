import { motion } from "motion/react";
import { div } from "motion/react-client";
import { useState, useEffect } from "react";
import Task from "./Task";

function TaskView(props: any) {
  function taskDeletion(id: any) {
    //logic to handle deletion -  send delete request
    console.log(id);
  }
  return (
    <div className="task-view">
      {props.schedules.map((task: any) => (
        <Task data={task} taskDeletion={taskDeletion}></Task>
      ))}
    </div>
  );
}

export default TaskView;
