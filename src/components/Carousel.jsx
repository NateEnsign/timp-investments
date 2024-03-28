import React, { useState } from "react";
import styles from "./Carousel.module.css";

const caseStudies = [
  {
    img: "https://images1.apartments.com/i2/NEDoRyPP3BpHDTuR4RvRuHyjqvWOOjKLL1CzUlvVnKw/111/maple-leaf-townhomes-arvada-co-primary-photo.jpg",
    property: "Maple Leaf",
    location: "ARVADA, CO",
    heading: "Local Presence Leads to Superior Performance",
    description:
      "Timp purchased Maple Leaf, a 71-unit property, in 2019 in a strong neighborhood of Denver. Our disciplined acquisition criteria and strong reputation with a repeat broker and seller led to an attractive basis at acquistion. We leveraged our local operating platform and market expertise to grow NOI performance through an elevated resident experience and strong lease renewals through changing market cycles.",
  },
  {
    img: "https://www.laaky.org/uploads/1/3/8/4/138439092/published/1-ext-leasing-office.png?1643383234",
    property: "Ashton Brook",
    location: "DEVONDALE, KY",
    heading: "Stringent Management through Vertical-Integration",
    description:
      "Timp acquired Ashton Brook in 2018, a 274-unit community in a prime Louisville location. Built in 1979, the property had begun interior renovations in 2017, prior to our ownership. Peak’s team of asset manager, project manager, and local leadership continued the interior renovations and completed full exterior and amenity improvements. Our vertically-integrated team successfully increased the asset value by optimizing income post-improvements.",
  },
  {
    img: "https://media.istockphoto.com/id/108220043/photo/row-of-suburban-townhouses-on-summer-day.jpg?s=612x612&w=0&k=20&c=JsgZj2lP1OavojeafCQNanTbVZzFO4qygnQhgdmx-aw=",
    property: "Summit Townhomes",
    location: "BURNSVILLE, MN",
    heading: "Creating Spaces Residents Want to Live",
    description:
      "Timp acquired Summit Townhomes in 2018, a quality 114-unit asset with minimum deferred maintenance. Targeted interior/exterior unit upgrades along with an extensive community amenity package led to increased resident satisfaction. Our focus on creating safe, clean and affordable communities for working families and individuals, serves our residents and drives value for our investors.",
  },
  {
    img: "https://rentpath-res.cloudinary.com/$img_current/t_3x2_webp_2xl/0bc6bf36ba9c604f30ea7518adf5b095",
    property: "Crescent Ridge",
    location: "JACKSONVILLE, FL",
    heading: "Buying Core Plus Assets in Great Locations of Steady Cash Flow",
    description:
      "Crescent Ridge, a 350-unit property, was acquired in 2018. This attractive property within the economically strong Jacksonville boasts a variety of amenities, including two swimming pools, lake views, sport courts, a playground, and a car-wash area. The strategic combination of a great asset in a great location resulted in impressive value creation throughout Peak’s ownership.",
  },
  {
    img: "https://images1.apartments.com/i2/TLXHozaNm5j3QyGQowLOxcEjAvQ0ME8Q5ooc4LsB0Zk/111/beacon-hill-bluffdale-ut-primary-photo.jpg",
    property: "Beacon Hill",
    location: "BLUFFDALE, UT",
    heading: "High-Quality Affordable Communitites in Quality Markets",
    description:
      "Beacon Hill is a 168-unit high-quality LIHTC property located near key transit corridors and major employment hubs. Timp acquired this newly built community in 2016 well below replacement cost and at an attractive cap rate, and has managed operations to date. The excellent location, build quality, and affordability of this community has contributed to the consistently strong occupancy and NOI growth over its hold period.",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length
    );
  };

  return (
    <div className={styles.main}>
        <div className={styles.slide}>
          <div className={styles.textContainer}>
            <div className={styles.text}>
              <div className={styles.location}>
                <span>CASE STUDY</span>
                <span>{caseStudies[currentIndex].location}</span>
              </div>
              <div className={styles.property}>
                {caseStudies[currentIndex].property}
              </div>
              <div className={styles.heading}>
                {caseStudies[currentIndex].heading}
              </div>
              <div className={styles.description}>
                {caseStudies[currentIndex].description}
              </div>
            </div>
            <div className={styles.toggle}>
              <span>
                <button onClick={goToPrevious}>Previous</button>
                <button onClick={goToNext}>Next</button>
              </span>
            </div>
          </div>

          <img
            src={caseStudies[currentIndex].img}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
  );
}

export default Carousel;
