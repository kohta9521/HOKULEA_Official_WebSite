import React from "react";

// scss import
import styles from "./styles/Hero.module.scss";

// components import
import ScrollBox from "../atoms/ScrollBox";
import ScrollText from "../atoms/ScrollText";
import HeroTitle from "../molecules/HeroTitle";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <HeroTitle />
        <ScrollText />
        <ScrollBox />
      </div>
    </div>
  );
};

export default Hero;
