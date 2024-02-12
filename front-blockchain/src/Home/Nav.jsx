import "../index.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <ul id="nav">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <a href="https://ryandanion.notion.site/Roadmap-LiberaCatena-b77058edf6894de99a4eb4b288a0e3a3?pvs=4">
            Roadmap
          </a>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}
