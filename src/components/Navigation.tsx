import "./nav.css";
import settings from "./assets/settings.png";
import clock from "./assets/clock.png";
import wifi from "./assets/wifi.png";
import { motion } from "motion/react";

type Props = {
  clickHandler: (value: number) => void;
};

function Navigation({ clickHandler }: Props) {
  function click(id: any) {
    clickHandler(id);
    console.log(id);
  }
  return (
    <nav className="navigation">
      <h1 id="logo">AHIS</h1>
      <span id="navbarOptions">
        <ul>
          <li>
            <motion.button
              whileTap={{ scale: 0.7 }}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
              }}
            >
              <span onClick={() => click(1)}>
                <img src={clock} alt="x" />
              </span>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.7 }}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
              }}
            >
              <span onClick={() => click(2)}>
                <img src={wifi} alt="x" />
              </span>
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 0.7 }}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
              }}
            >
              <span onClick={() => click(3)}>
                <img src={settings} alt="x" />
              </span>
            </motion.button>
          </li>
        </ul>
      </span>
    </nav>
  );
}

export default Navigation;
