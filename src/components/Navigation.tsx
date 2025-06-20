import "./nav.css";
import settings from "./assets/settings.png";
import clock from "./assets/clock.png";
import wifi from "./assets/wifi.png";
function Navigation() {
  return (
    <nav className="navigation">
      <h1 id="logo">AHIS</h1>
      <span id="navbarOptions">
        <ul>
          <li>
            <img src={clock} alt="x" />
          </li>
          <li>
            <img src={wifi} alt="x" />
          </li>
          <li>
            <img src={settings} alt="x" />
          </li>
        </ul>
      </span>
    </nav>
  );
}

export default Navigation;
