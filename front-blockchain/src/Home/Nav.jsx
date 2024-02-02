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
          <Link to={`/roadmap`}>Roadmap</Link>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}
