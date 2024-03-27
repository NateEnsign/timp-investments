import React from "react";
import styles from "./ImpactScreen.module.css";

const ImpactScreen = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.introRibon}>
        <div className={styles.introContent}>
          <p className={styles.introImpact}>IMPACT</p>
          <p className={styles.introApproach}>Our Sustainability Approach</p>
        </div>
      </div>
      <div className={styles.impactSafetyRibon}>
        <p>
          Timp is focused on addressing the Nation's ever-growing need for safe,
          clean and affordable housing. Our communities provide housing options
          to a diverse range of individuals and families across various income
          levels. We look to enhance our workplaces and our communities through
          targeted programs and sustainability initiatives.
        </p>
      </div>
      <div className={styles.initiativesBanner}>
        <div className={styles.initiativeText}>
          <div className={styles.initiativeTextHeader}>
            Social Impact Initiatives
          </div>
          <div className={styles.initiativeTextPara}>
            We believe in actively engaging with the communities that we own and
            operate by supporting local initiatives and community development
            projects. We promote social interaction and provide resources that
            enhance the overall well-being of our residents and the broader
            community.
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img src="https://7kc4a0.p3cdn1.secureserver.net/wp-content/uploads/2023/11/eductional-1.jpeg" alt="Woman sitting at table with laptop" className={styles.cardImg} />
            <p className={styles.cardHeader}>Educational</p>
            <p className={styles.cardPara}>Programs and resources for budgeting, job training, resume assistance, buying a home and building credit through RentPlus, afterschool programs, and tutoring.</p>
          </div>
          <div className={styles.card}>
            <img src="https://7kc4a0.p3cdn1.secureserver.net/wp-content/uploads/2024/01/Community-Engagment.jpg" alt="Man serving soup at food kitchen" className={styles.cardImg} />
            <p className={styles.cardHeader}>Community Engagement</p>
            <p className={styles.cardPara}>Holiday activities and BBQs, back-to-school drives, toys for tots, breakfast on-the-go, mobile libraries, and fire and safety awareness events.</p>
          </div>
          <div className={styles.card}>
            <img src="https://7kc4a0.p3cdn1.secureserver.net/wp-content/uploads/2023/11/health-1-1.jpeg" alt="Group of people on a hike through the woods" className={styles.cardImg} />
            <p className={styles.cardHeader}>Health and Wellness</p>
            <p className={styles.cardPara}>Health screenings, health and nutrition courses, resident-led fitness groups, mental health resources, and education on available health care services</p>
          </div>
        </div>
      </div>
      <div className={styles.environmentBanner}>
        <div className={styles.environmentText}>
          <div className={styles.environmentTextHeader}>Energy & Water Savings</div>
          <div className={styles.environmentTextPara}>We reduce the environmental impact of our properties by investing in efficient irrigation systems, LED lighting, and low-flow plumbing fixtures.</div>
        </div>
        <div className={styles.imgContainer}>
        <img src="https://images1.apartments.com/i2/jAyhnFCbzyEgfEqX9fATAwhtTCiqjCDK4NkIi1_8BHM/111/the-flats-at-riverwoods-provo-ut-office.png" alt="Image of apartment complex lit up at night" className={styles.environmentImg} />
        </div>
      </div>
      <div className={styles.statsBanner}>
        <div className={styles.stat}>
          <p className={styles.statNumber}>70mm+</p>
          <p className={styles.statPara}>GALLONS OF WATER SAVED PER YEAR</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statNumber}>70%</p>
          <p className={styles.statPara}>LESS ELECTRICITY USAGE PER YEAR</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statNumber}>$7.5mm</p>
          <p className={styles.statPara}>INESTED IN ENVIRONMENTAL PROJECTS</p>
        </div>
      </div>
      <div className={styles.bottomBanner}>
        <div className={styles.bottomBannerText}>While Timp believes social and environmental impact factors can enhance long-term value, Timp does not exclusively pursue an impact-based investment strategy or limit it's investments to those that meet specific social and environmental impact criteria or standards.</div>
      </div>
    </div>
  );
};

export default ImpactScreen;
