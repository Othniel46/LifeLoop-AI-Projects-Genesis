import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        LifeLoop-AI
      </div>

      <nav>

        <NavLink to="/dashboard">
          🏠 Dashboard
        </NavLink>

        <NavLink to="/ai">
          🤖 AI Core
        </NavLink>

        <NavLink to="/projects">
          💼 Projects
        </NavLink>

        <NavLink to="/research">
          🔬 Research
        </NavLink>

        <NavLink to="/finance">
          💰 Finance
        </NavLink>

        <NavLink to="/health">
          ❤️ Health
        </NavLink>

        <NavLink to="/space">
          🌌 Space
        </NavLink>

      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/settings">
          ⚙️ Settings
        </NavLink>
      </div>

    </aside>
  );
}

export default Sidebar;
