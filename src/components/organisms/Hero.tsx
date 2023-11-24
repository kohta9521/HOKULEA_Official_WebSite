import React from "react";

// scss import
import styles from "./styles/Hero.module.scss";

// components import
import ScrollBox from "../atoms/ScrollBox";
import ScrollText from "../atoms/ScrollText";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>this area is hero</h1>
        <ScrollText />
        <ScrollBox />
      </div>
    </div>
  );
};

export default Hero;
