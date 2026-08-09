import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="footer-content">

        <div>
          <h2>LifeLoop-AI</h2>

          <p>
            Your Personal AI Operating System.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/research">Research</Link>
          <Link to="/projects">Projects</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {year} LifeLoop-AI Project Genesis.
          All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
