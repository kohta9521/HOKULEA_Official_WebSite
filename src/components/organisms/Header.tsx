import React from "react";

// scss import
import styles from "./styles/Header.module.scss";

// component import
import Logo from "../atoms/Logo";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo id={1} link="/" size="medium" color="white" />
      </div>
    </div>
  );
};

export default Header;
