import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="brand-logo" aria-label="LifeLoop-AI Home">
      <img
        src="/logo.svg"
        alt="LifeLoop-AI"
        className="brand-logo-image"
      />
    </Link>
  );
}

export default Logo;
