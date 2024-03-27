import React from "react";
import styles from "./ApproachScreen.module.css";
import { Link } from "react-router-dom";

const ApproachScreen = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.introBanner}>
        <div className={styles.introBannerText}>
          <div className={styles.introBannerHeader}>APPROACH</div>
          <div className={styles.introBannerPara}>
            Vertically-Integrated Workforce Housing Focus
          </div>
        </div>
      </div>
      <div className={styles.diverseBanner}>
        <div className={styles.diverseBannerText}>
          Timp's investments are geographically diverse, primarily consisting of
          core-plus and value-add multifamily investments in the top 100
          Metropolitan Statistical Areas (MSAs) in the United States. Our
          owner-operator model delivers superior returns through stringent
          management and experienced leadership.
        </div>
      </div>
      <div className={styles.integrationBanner}>
        <div className={styles.integrationTextContainer}>
          <div className={styles.integrationText}>
            <div className={styles.integrationTextHeader}>
              Vertical Integration
            </div>
            <div className={styles.integrationTextPara}>
              Timp Living manages the communities owned by Timp Investements.
              Our boots on the ground approach provides local knowledge prior to
              acquisition, and faster implementation of operational enhancements
              during ownership. These asset-level business plans along with
              local leadership maximize resident service, retention, occupancy,
              and NOI growth.
            </div>
          </div>
        </div>
        <img
          src="https://apxconstructiongroup.com/wp-content/uploads/2022/11/modern-apartment-building-designs-dusk.jpeg"
          alt=""
          className={styles.integrationImg}
        />
      </div>
      <div className={styles.strategyBanner}>
        <div className={styles.strategyCardContainer}>
          <div className={styles.strategyCard}>
            <img
              src="https://7kc4a0.p3cdn1.secureserver.net/wp-content/uploads/2023/11/stringent.svg?time=1711480242"
              alt=""
              className={styles.strategyImg}
            />
            <div className={styles.strategyHeader}>Stringent Management</div>
            <div className={styles.strategyPara}>
              We have a focused approach to community management which is
              strengthened by our local leadership and on the ground presence.
            </div>
          </div>
        </div>
        <div className={styles.strategyCardContainer}>
          <div className={styles.strategyCard}>
            <img
              src="https://7kc4a0.p3cdn1.secureserver.net/wp-content/uploads/2023/11/experience-logo.svg?time=1711480242"
              alt=""
              className={styles.strategyImg}
            />
            <div className={styles.strategyHeader}>Experienced Leadership</div>
            <div className={styles.strategyPara}>
              Our award-winning leadership team has deep experience creating
              value for our investors adn better communities for our residents.
            </div>
          </div>
        </div>
        <div className={styles.strategyCardContainer}>
          <div className={styles.strategyCard}>
            <img
              src="https://7kc4a0.p3cdn1.secureserver.net/wp-content/uploads/2023/11/value-logo.svg?time=1711480242"
              alt=""
              className={styles.strategyImg}
            />
            <div className={styles.strategyHeader}>Value Alignment</div>
            <div className={styles.strategyPara}>
              As an owner-operator, our mission is fully aligned, enabling us to
              enhance the value of our communities through faster decisions,
              communication, and implementation.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.focusBanner}>
        <div className={styles.focusText}>
          <div className={styles.focusTextHeader}>Market Focus</div>
          <div className={styles.focusTextPara}>
            At Timp, we focus on workforce and affordable housing within frowth
            markets, utilizing strict selection criteria which results in
            strong, long-term growth opportunities.
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <img
                src="https://7kc4a0.p3cdn1.secureserver.net/wp-content/uploads/2023/11/Workforce-Housing.svg?time=1711480242"
                alt="Graphic showing homes"
                className={styles.cardImg}
              />
              <p className={styles.cardHeader}>Workforce Housing</p>
              <p className={styles.cardPara}>
                Timp works to provide safe, clean, and affordable housing to
                working families and individuals. We have a 15+ year commitment
                to this asset type.
              </p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <img
                src="https://7kc4a0.p3cdn1.secureserver.net/wp-content/uploads/2023/11/growth.svg?time=1711480242"
                alt="Graphic showing growth trending upword"
                className={styles.cardImg}
              />
              <p className={styles.cardHeader}>Growth Markets</p>
              <p className={styles.cardPara}>
                Our strict market identification and selection criteria have
                been refined over Timp's many years of operation and across
                multiple market cycles.
              </p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <img
                src="https://7kc4a0.p3cdn1.secureserver.net/wp-content/uploads/2023/11/disciplined.svg?time=1711480242"
                alt="Graphic showing a solid square inside 2 boxes"
                className={styles.cardImg}
              />
              <p className={styles.cardHeader}>Diciplined Approach</p>
              <p className={styles.cardPara}>
                At Timp, we stick to what we do well: buying, operating, and
                improving workforce housing assets in growth markets. Our
                success is defined by our ability to stay disciplined, both at
                acquistion and during ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className={styles.teamSection}>
        <h2 className={styles.teamSectionTitle}>Team</h2>
        <p className={styles.teamSectionPara}>When you work with Peak Capital, you tap into a deep and diverse pool of talent, education, and expertise.</p>
        <Link className={styles.teamSectionLink} to='/team'>Learn More</Link>
      </span>
    </div>
  );
};

export default ApproachScreen;
