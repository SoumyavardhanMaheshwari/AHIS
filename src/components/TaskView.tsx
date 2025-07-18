import { motion } from "motion/react";
import { div } from "motion/react-client";
import { useState, useEffect } from "react";
import Task from "./Task";
async function deleteSchedule(scheduleId: any, refreshTaskList: any) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/schedule/${scheduleId}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      console.log(`Schedule with ID ${scheduleId} deleted successfully.`);
      refreshTaskList(); // Refresh the task list after deletion
      // You might want to update your UI here, e.g., remove the deleted item from a list.
    } else {
      const errorData = await response.json();
      console.error(
        `Failed to delete schedule with ID ${scheduleId}:`,
        errorData
      );
    }
  } catch (error) {
    console.error("An error occurred while deleting the schedule:", error);
  }
}

function TaskView(props: any) {
  function taskDeletion(id: any) {
    deleteSchedule(id, props.refreshTaskList);
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
