import "./nav.css";
import settings from "./assets/settings.png";
import clock from "./assets/clock.png";
import wifi from "./assets/wifi.png";

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
            <a href="#" onClick={() => click(1)}>
              <img src={clock} alt="x" />
            </a>
          </li>
          <li>
            <a href="#" onClick={() => click(2)}>
              <img src={wifi} alt="x" />
            </a>
          </li>
          <li>
            <a href="#" onClick={() => click(3)}>
              <img src={settings} alt="x" />
            </a>
          </li>
        </ul>
      </span>
    </nav>
  );
}

export default Navigation;
