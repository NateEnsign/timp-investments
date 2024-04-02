import React from "react";
import styles from "./TeamScreen.module.css";
import Employees from "../components/Employees";
import { Link } from "react-router-dom";

const TeamScreen = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.introRibon}>
        <div className={styles.introContent}>
          <p className={styles.teamHeader}>TEAM</p>
          <p className={styles.teamContent}>Our Team</p>
        </div>
      </div>
      <div className={styles.teamInfoRibon}>
        <p>
          Each member of Timp's team provides unique expertise that allows us to
          effectively source opportunities, complete acquistions, and manage
          investments for strong returns for our partners.
        </p>
      </div>
      <div className={styles.cultureBanner}>
        <div className={styles.cultureTextContainer}>
          <div className={styles.cultureText}>
            <div className={styles.cultureTextHeader}>Company Culture</div>
            <div className={styles.cultureTextPara}>
              Our people are foundational to who we are and what we do. We look
              to our cuture and success to make Timp a place where talented and
              ambitious people want to be.
            </div>
          </div>
        </div>
        <img
          src="https://blogger.googleusercontent.com/img/a/AVvXsEgNhkjnyecTok1QR2PBMqfz-V3UM7F7aXJr_sQboEilsw70ksCXsdnw_jH-B3H2Gt5waMFrLhnsvtWPvUGASMzELBoFGXoY5Y2C11JdnbQjDn3omYNLKc19JInzbBLEXhGCbAOAg3XeN3v9HvB0A5FcRmnlsbaemRruoZTDCs3aJHwK48VerHM9qOcQrE4=s1120-rw"
          alt=""
          className={styles.cultureImg}
        />
      </div>
      <div className={styles.teamBanner}>
        <p className={styles.teamBannerHead}>Meet the Team</p>
        <div className={styles.cardContainer}>
          <Employees />
        </div>
      </div>
      <span className={styles.teamSection}>
        <h2 className={styles.teamSectionTitle}>Impact</h2>
        <p className={styles.teamSectionPara}>Timp works to provide safe, clean and affordable housing to the working families of America. We actively engage in and support the communitites where we own and implement sustainability measures to improve our properties and the environment.</p>
        <Link className={styles.teamSectionLink} to='/impact'>Learn More</Link>
      </span>
    </div>
  );
};

export default TeamScreen;
