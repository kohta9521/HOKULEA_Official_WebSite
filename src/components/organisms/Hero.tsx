import React from "react";

// scss import
import styles from "./styles/Hero.module.scss";
import ScrollBox from "../atoms/ScrollBox";

// components import

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>this area is hero</h1>
        <ScrollBox />
      </div>
    </div>
  );
};

export default Hero;
