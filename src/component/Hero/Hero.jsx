import React from "react";
import styles from "./Hero.module.css";
import headPhone from '../../assets/headphone.png'

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={headPhone}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;
