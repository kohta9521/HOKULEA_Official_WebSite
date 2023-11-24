import React from "react";

// scss import
import styles from "./styles/Hero.module.scss";

// components import

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>this area is hero</h1>
      </div>
    </div>
  );
};

export default Hero;
