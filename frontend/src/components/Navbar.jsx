import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" className="logo">
        🚀 LifeLoop-AI
      </NavLink>

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/ai">AI</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/research">Research</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

      </ul>

      <button className="login-btn">
        Login
      </button>

    </nav>
  );
}

export default Navbar;