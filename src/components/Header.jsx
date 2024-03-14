import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          Logo
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/approach">Approach</Link>
        <Link to="/team">Team</Link>
        <Link to="/impact">Impact</Link>
      </div>
    </div>
  );
};

export default Header;
