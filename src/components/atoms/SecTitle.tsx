import React from "react";

// scss import
import styles from "./styles/SecTitle.module.scss";

// type
export type SecTitleProps = {
  id: number;
  number: string;
  jaTitle: string;
  enTitle: string;
};

const SecTitle = ({ id, number, jaTitle, enTitle }: SecTitleProps) => {
  return (
    <div className={styles.titleBox} key={id}>
      <div className={styles.flexBox}>
        <p className={styles.number}>{number}</p>
        <p className={styles.jaTitle}>{jaTitle}</p>
      </div>
      <h1 className={styles.enTitle}>{enTitle}</h1>
    </div>
  );
};

export default SecTitle;
