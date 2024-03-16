import React from "react";
import styles from "./HomeScreen.module.css";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.introRibbon}>
        <span className={styles.title}>
          <h2 className={styles.titleHeader}>Timp Capital Partners</h2>
          <h3 className={styles.titleText}>
            Timp Capital is a vertically-integrated multifamily investment and
            management firm with conventional and affordable communitites in
            growth markets across the United States.
          </h3>
        </span>
        <span className={styles.titleImage}>
          <img
            src="https://resource.rentcafe.com/image/upload/q_auto,f_auto,c_limit,w_1920/s3/2/85233/buildingphoto%20(1).jpg"
            alt="Photo of an apartment complex"
          />
        </span>
      </div>
      <div className={styles.portfolioSection}>
        <div className={styles.portfolioInfo}>
          <h2 className={styles.portfolioTitle}>Portfolio</h2>
          <p className={styles.portfolioPara}>Our investments are geographically diverse, primarily consisting of core-plus and value-add multifamily investements.</p>
          <Link className={styles.portfolioLink} to='/portfolio'>Learn More</Link>
        </div>
        <div className={styles.portfolioStats}>
          <div>
            <h2 className={styles.portfolioNumber}>58K+</h2>
            <p className={styles.portfolioNumberLabel}>Units Owned Since Inception</p>
          </div>
          <div>
            <h2 className={styles.portfolioNumber}>750</h2>
            <p className={styles.portfolioNumberLabel}>Units Owned Since Inception</p>
            <p >Team Members</p>
          </div>
          <div>
            <h2 className={styles.portfolioNumber}>16</h2>
            <p className={styles.portfolioNumberLabel}>Units Owned Since Inception</p>
            <p >Years in Business</p>
          </div>
        </div>
      </div>
      <div className={styles.approachSection}>
        <h2>Approach Section</h2>
      </div>
    </div>
  );
};

export default HomeScreen;
