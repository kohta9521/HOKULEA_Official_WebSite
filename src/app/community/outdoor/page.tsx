import React from "react";

// scss import
import styles from './Outdoor.module.scss'

// components import
import Header from "@/components/organisms/Header";

const Outdoor = () => {
  return (
    <div className={styles.outdoor}>
      <Header />
    </div>
  );
};

export default Outdoor;
