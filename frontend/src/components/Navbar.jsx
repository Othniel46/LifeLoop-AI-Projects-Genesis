import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🚀 LifeLoop-AI
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">AI</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <button className="login-btn">
        Login
      </button>
    </nav>
  );
}

export default Navbar;