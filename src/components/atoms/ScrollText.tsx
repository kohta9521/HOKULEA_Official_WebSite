import React from "react";

// scss import
import styles from "./styles/ScrollText.module.scss";

const ScrollText = () => {
  return (
    <div className={styles.box}>
      <p className={styles.text}>SCROLL DOWN</p>
      <span className={styles.bar}></span>
    </div>
  );
};

export default ScrollText;
