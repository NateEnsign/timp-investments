import React from 'react'
import styles from './PortfolioScreen.module.css'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'


const PortfolioScreen = () => {
  return (
    <div className={styles.mainPage}>
       <div className={styles.introBanner}>
        <div className={styles.introBannerText}>
          <div className={styles.introBannerHeader}>PORTFOLIO</div>
          <div className={styles.introBannerPara}>
            Delivering Value through Targeted Real Estate Investing
          </div>
        </div>
      </div>
      <div className={styles.footprintBanner}>
        <div className={styles.footprintTextContainer}>
          <div className={styles.footprintText}>
            <div className={styles.footprintTextHeader}>
              National Footprint
            </div>
            <div className={styles.footprintTextPara}>
           Timp owns workforce and affordable housing properties in over 20 growth markets across the United States, with a focus on the Mountain West, Midwest, and Sunbelt regions.
            </div>
          </div>
        </div>
        <img
          src="https://7kc4a0.p3cdn1.secureserver.net/wp-content/uploads/2023/11/footprint.png"
          alt=""
          className={styles.footprintImg}
        />

      </div>
      <div className={styles.statsBanner}>
        <div className={styles.stat}>
          <p className={styles.statNumber}>58K+</p>
          <p className={styles.statPara}>Units Owned Since Inception</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statNumber}>750</p>
          <p className={styles.statPara}>Team Members</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statNumber}>16</p>
          <p className={styles.statPara}>Years in Business</p>
        </div>
      </div>
      <Carousel />
      <div className={styles.awardSection}>
        <div className={styles.awardSectionInfo}>
          <h2 className={styles.awardSectionTitle}>Recognized as a leader in real estate</h2>
          <p className={styles.awardSectionPara}>Our extensive track record of growth, success and economic contribution has received significant recognition.</p>
        </div>
        <div className={styles.awardSectionImages}>
          <img className={styles.awardImage} src="http://peakcapital.acumen.digital/wp-content/uploads/2023/11/nm-logo.svg" alt="NMHC 50 largest apartment owners" />
          <img className={styles.awardImage} src="http://peakcapital.acumen.digital/wp-content/uploads/2023/11/inc.svg" alt="Inc 500 award" />
          <img className={styles.awardImage} src="http://peakcapital.acumen.digital/wp-content/uploads/2023/11/fast50.svg" alt="Fast 50 and emerging award" />
          <img className={styles.awardImage} src="http://peakcapital.acumen.digital/wp-content/uploads/2023/11/Group.svg" alt="MountainWest Capital Network Award" />
          <img className={styles.awardImage} src="http://peakcapital.acumen.digital/wp-content/uploads/2023/11/ernst.svg" alt="Earnst and Young Entrepreneur of the year" />
          <img className={styles.awardImage} src="http://peakcapital.acumen.digital/wp-content/uploads/2023/11/investor.svg" alt="National Real Estate Investor Award" />
        </div>
      </div>
      <span className={styles.teamSection}>
        <h2 className={styles.teamSectionTitle}>Approach</h2>
        <p className={styles.teamSectionPara}>We are a vertically-integrated owner-operator, with disciplined acquisition criteria and an extensive track record of success.</p>
        <Link className={styles.teamSectionLink} to='/team'>Learn More</Link>
      </span>
    </div>
  )
}

export default PortfolioScreen