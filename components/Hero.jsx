import React from 'react'
import SubscribeElement from './SubscribeElement'
import styles from "../styles/Hero.module.css";
import HeroImage from "../public/images/heroimage2.webp";
import Image from "next/image"

const Hero = () => {
  return (
    <div className={styles.herocontainer}>
      <div className={styles.heroleft}>
        <h1>
          Cooking Blog 
        </h1>
        <SubscribeElement />
      </div>
      <div className={styles.heroright}>
      <Image 
      src={HeroImage}
      alt="Hero image cooking pan"
      className={styles.heroimage}
      />
      </div>

    </div>
  )
}

export default Hero