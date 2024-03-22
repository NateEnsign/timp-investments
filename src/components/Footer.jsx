import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <Link to="/" className={styles.footerLogo}>Timp Investments</Link>
        <div className={styles.footerLinks}>
            <Link to='/portfolio' className={styles.footerLink}>PORTFOLIO</Link>
            <Link to='/approach' className={styles.footerLink}>APPROACH</Link>
            <Link to='/team' className={styles.footerLink}>TEAM</Link>
            <Link to='/impact' className={styles.footerLink}>IMPACT</Link>
        </div>
        <div className={styles.footerContact}>
            <p>CALL: 801 870 4151</p>
            <p>EMAIL: info@timpinvestments.com</p>
            <p>ADDRESS:</p>
            <p>1111 N 222 W</p>
            <p>Springville,UT 84663</p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
