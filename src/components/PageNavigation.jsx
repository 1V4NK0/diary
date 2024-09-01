import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from './PageNav.module.css';
function PageNavigation() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNavigation;
