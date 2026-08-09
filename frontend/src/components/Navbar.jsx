import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">

        <Logo />

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/dashboard">
            Dashboard
          </NavLink>

          <NavLink to="/ai">
            AI Assistant
          </NavLink>

          <NavLink to="/projects">
            Projects
          </NavLink>

          <NavLink to="/research">
            Research
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>
        </div>

        <button className="login-btn">
          Login
        </button>

      </nav>
    </header>
  );
}

export default Navbar;
