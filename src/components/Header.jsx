import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const HeaderDesktop = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.header}>
      <span className={styles.headerSpan}>
        <Link to="/" className={styles.logo}>
          TIMP INVESTMENTS
        </Link>
        <Menu onClick={toggleSidebar} className={styles.hamburger} />
      </span>
      <div className={`${sidebarOpen ? styles.open : styles.links}`}>
        <div className={styles.closeIconContainer}>
        {sidebarOpen && (
          <X className={styles.closeIcon} onClick={toggleSidebar} />
        )}
        </div>
        <Link
          to="/portfolio"
          onClick={toggleSidebar}
          className={`${sidebarOpen ? styles.linkOpen : styles.link}`}
        >
          Portfolio
        </Link>
        <Link
          to="/approach"
          onClick={toggleSidebar}
          className={`${sidebarOpen ? styles.linkOpen : styles.link}`}
        >
          Approach
        </Link>
        <Link
          to="/team"
          onClick={toggleSidebar}
          className={`${sidebarOpen ? styles.linkOpen : styles.link}`}
        >
          Team
        </Link>
        <Link
          to="/impact"
          onClick={toggleSidebar}
          className={`${sidebarOpen ? styles.linkOpen : styles.link}`}
        >
          Impact
        </Link>
      </div>
    </div>
  );
};

export default HeaderDesktop;
