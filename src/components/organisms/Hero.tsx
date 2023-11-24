import React from "react";

// scss import
import styles from "./styles/Hero.module.scss";

// components import
import ScrollBox from "../atoms/ScrollBox";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>this area is hero</h1>
        {/* TODO: 絶対位置でbottom: -40px; 固定にする */}
        <ScrollBox />
      </div>
    </div>
  );
};

export default Hero;
