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
          <p className={styles.portfolioPara}>
            Our investments are geographically diverse, primarily consisting of
            core-plus and value-add multifamily investements.
          </p>
          <Link className={styles.portfolioLink} to="/portfolio">
            Learn More
          </Link>
        </div>
        <div className={styles.portfolioStats}>
          <div>
            <h2 className={styles.portfolioNumber}>58K+</h2>
            <p className={styles.portfolioNumberLabel}>
              Units Owned Since Inception
            </p>
          </div>
          <div>
            <h2 className={styles.portfolioNumber}>750</h2>
            <p className={styles.portfolioNumberLabel}>
              Units Owned Since Inception
            </p>
            <p>Team Members</p>
          </div>
          <div>
            <h2 className={styles.portfolioNumber}>16</h2>
            <p className={styles.portfolioNumberLabel}>
              Units Owned Since Inception
            </p>
            <p>Years in Business</p>
          </div>
        </div>
      </div>
      <div className={styles.approachSection}>
        <span className={styles.approachImage}>
          <img
            src="https://dhiengineering.com/img/DHI-Engineering_Who-We-Are.jpg"
            alt="Image of apartment complex"
          />
        </span>
        <span className={styles.approachInfo}>
          <h2 className={styles.approachInfoTitle}>Approach</h2>
          <p className={styles.approachInfoPara}>
            Timp is a vertically-integrated owner-operator of apartments with
            disciplined acquisition criteria, a resident-focused management
            team, and an extensive track record of success.
          </p>
          <Link className={styles.approachInfoLink} to="/approach">
            Learn More
          </Link>
        </span>
      </div>
      <span className={styles.teamSection}>
        <h2 className={styles.teamSectionTitle}>Team</h2>
        <p className={styles.teamSectionPara}>When you work with Peak Capital, you tap into a deep and diverse pool of talent, education, and expertise.</p>
        <Link className={styles.teamSectionLink} to='/team'>Learn More</Link>
      </span>
      <div className={styles.tablePicSection}>
        <img className={styles.tableImage} src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Empty board room table" />
      </div>
      <div className={styles.bottomBanner}>
        <h2>Bottom Banner</h2>
      </div>
    </div>
  );
};

export default HomeScreen;
