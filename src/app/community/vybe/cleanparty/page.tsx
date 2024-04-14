import React from "react";

// scss
import styles from "./CleanParty.module.scss";

// components import
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const CleanParty = () => {
  return (
    <div className={styles.clean}>
      <Header />
      {/* top */}
      <div className={styles.top}></div>
      {/* about */}
      <div className={styles.about}></div>
      {/* backgrounds */}
      <div className={styles.background}></div>
      {/* pasts */}
      <div className={styles.pasts}></div>
      {/* gallery */}
      <div className={styles.gallery}></div>
      {/* sponsors */}
      <div className={styles.sponsors}></div>
      {/* team */}
      <div className={styles.team}></div>
      {/* contact */}
      <div className={styles.contact}></div>
    </div>
  );
};

export default CleanParty;
