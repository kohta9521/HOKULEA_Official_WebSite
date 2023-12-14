import React from "react";

// scss import
import styles from "./styles/HeroTitle.module.scss";

const HeroTitle = () => {
  return (
    <div className={styles.heroBox}>
      <p className={styles.subJaTitle}>今までにない若者のコミュニティ</p>
      <h1 className={styles.title}>Creativity</h1>
      <div className={styles.flexBox}>
        <h1 className={styles.centerTitle}>Energy</h1>
        <p className={styles.textBoxText}>
          A HUB FOSTERING THE DYNAMIC AND UNIQUE CREATIVITY OF YOUTH, OFFERING DIVERSE EVENTS BASED IN TOKYO
        </p>
      </div>
      <h1 className={styles.title}>Synergy</h1>
    </div>
  );
};

export default HeroTitle;
