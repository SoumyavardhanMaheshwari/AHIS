import { motion } from "motion/react";
import Picker, { type PickerValue } from "react-mobile-picker";
import { useCallback, useState } from "react";

function getDayArray(year: number, month: number) {
  const dayCount = new Date(year, month, 0).getDate();
  return Array.from({ length: dayCount }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
}
const getNext30Days = () => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    const label = d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }); // e.g., "Fri, Jul 5"

    const value = d.toISOString().split("T")[0]; // e.g., "2025-07-05"
    dates.push({ label, value });
  }

  return dates;
};
const getAllTimes = () => {
  const times = [];

  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const hour = String(h).padStart(2, "0");
      const minute = String(m).padStart(2, "0");
      times.push(`${hour}:${minute}`);
    }
  }

  return times; // 96 entries: "00:00", "00:15", ..., "23:45"
};

const getFutureTimesForToday = () => {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const times = [];

  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const total = h * 60 + m;
      if (total > currentMinutes) {
        const hour = String(h).padStart(2, "0");
        const minute = String(m).padStart(2, "0");
        times.push(`${hour}:${minute}`);
      }
    }
  }

  return times;
};

function ScheduleMenu(props: any) {
  const [pickerValue, setPickerValue] = useState<PickerValue>({
    hour: "00",
    minute: "10",
    second: "00",
  });
  const now = new Date();

  const [taskDate, setTaskDate] = useState<PickerValue>({
    date: getNext30Days()[0].label,
    time: getFutureTimesForToday()[0],
  });

  const handleTaskDateChange = useCallback(
    (newValue: PickerValue, key: string) => {
      setTaskDate({ ...newValue });
    },
    []
  );

  // console.log(pickerValue);
  const handlePickerChange = useCallback(
    (newValue: PickerValue, key: string) => {
      if (key === "second") {
        setPickerValue(newValue);
        return;
      }
      // const { hour, minute } = newValue;

      setPickerValue({ ...newValue });
    },
    []
  );
  const initialTaskStartTimes = (
    taskDate.date == getNext30Days()[0].label
      ? getFutureTimesForToday()
      : getAllTimes()
  ).map((minute) => (
    <Picker.Item key={minute} value={minute}>
      {({ selected }) => (
        <div
          className={
            selected ? "font-semibold text-neutral-900" : "text-neutral-400"
          }
        >
          {minute}
        </div>
      )}
    </Picker.Item>
  ));
  function addTask() {
    props.scheduleAddTaskCallback([taskDate, pickerValue]);
  }

  if (props.scheduleMenuState) {
    return (
      <div className="setting-container">
        <motion.div
          initial={{ opacity: 0.3, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="modal-type"
        >
          <div className="setting">
            <span
              className="cross-span"
              onClick={() => {
                props.scheduleMenuState
                  ? document
                      .getElementsByClassName("setting-container")[0]
                      .classList.add("vanish")
                  : document
                      .getElementsByClassName("setting-container")[0]
                      .classList.remove("vanish");
                setTimeout(() => {
                  props.toggleScheduleMenuState(!props.scheduleMenuState);
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
              <h1>Add Task</h1>
              <div className="schedule-menu-option">
                <p>Time Duration (hrs:mins:secs)</p>
                <Picker
                  value={pickerValue}
                  onChange={handlePickerChange}
                  wheelMode="natural"
                  height={120} // total picker height
                  itemHeight={40}
                >
                  <Picker.Column name="hour">
                    {Array.from({ length: 24 }, (_, i) => `${i}`).map(
                      (hour) => (
                        <Picker.Item key={hour} value={hour}>
                          {({ selected }) => (
                            <div
                              className={
                                selected
                                  ? "font-semibold text-neutral-900"
                                  : "text-neutral-400"
                              }
                            >
                              {hour}
                            </div>
                          )}
                        </Picker.Item>
                      )
                    )}
                  </Picker.Column>
                  <Picker.Column name="minute">
                    {Array.from({ length: 60 }, (_, i) =>
                      String(i).padStart(2, "0")
                    ).map((minute) => (
                      <Picker.Item key={minute} value={minute}>
                        {({ selected }) => (
                          <div
                            className={
                              selected
                                ? "font-semibold text-neutral-900"
                                : "text-neutral-400"
                            }
                          >
                            {minute}
                          </div>
                        )}
                      </Picker.Item>
                    ))}
                  </Picker.Column>
                  <Picker.Column name="second">
                    {Array.from({ length: 60 }, (_, i) =>
                      String(i).padStart(2, "0")
                    ).map((second) => (
                      <Picker.Item key={second} value={second}>
                        {({ selected }) => (
                          <div
                            className={
                              selected
                                ? "font-semibold text-neutral-900"
                                : "text-neutral-400"
                            }
                          >
                            {second}
                          </div>
                        )}
                      </Picker.Item>
                    ))}
                  </Picker.Column>
                </Picker>
              </div>
              <div className="schedule-menu-option">
                <p>Start Time and Date</p>
                <Picker
                  value={taskDate}
                  onChange={handleTaskDateChange}
                  wheelMode="natural"
                  height={120} // total picker height
                  itemHeight={40}
                >
                  <Picker.Column name="date">
                    {getNext30Days().map((date: any) => (
                      <Picker.Item key={date.label} value={date.label}>
                        {({ selected }) => (
                          <div
                            className={
                              selected
                                ? "font-semibold text-neutral-900"
                                : "text-neutral-400"
                            }
                          >
                            {date.label}
                          </div>
                        )}
                      </Picker.Item>
                    ))}
                  </Picker.Column>
                  <Picker.Column name="time">
                    {initialTaskStartTimes}
                  </Picker.Column>
                </Picker>
              </div>
              <div className="schedule-menu-option" onClick={addTask}>
                <motion.button
                  whileTap={{ scale: 0.7 }}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                  }}
                >
                  <span>+</span>
                </motion.button>
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

export default ScheduleMenu;
