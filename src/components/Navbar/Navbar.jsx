import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`section ${styles.navbar}`}>
      <Link to={"/"}>
        <h3 className={styles.logo}>Nishtha</h3>
      </Link>

      <div className={styles.navMenu}>
        <Link to="/">
          <h4 className={styles.navItem}>Home</h4>
        </Link>

        <Link to="/form">
          <h4 className={styles.navItem}>Form</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
