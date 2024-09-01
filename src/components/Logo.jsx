import { Link } from "react-router-dom";
import "./Logo.css";
function Logo() {
  return (
    <Link to="/">
      <p className="logo">Reflect <span>📝</span></p>
    </Link>
  );
}

export default Logo;
