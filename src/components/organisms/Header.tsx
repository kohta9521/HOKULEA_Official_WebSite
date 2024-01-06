'use client'
import React, { useEffect } from "react";

// aos imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// scss import
import styles from "./styles/Header.module.scss";

// component import
import Logo from "../atoms/Logo";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // アニメーションの持続時間
      once: true, // アニメーションを一度だけ実行する
    });
  }, []);
  return (
    <div className={styles.header} data-aos="fade-down">
      <div className={styles.container}>
        <Logo id={1} link="/" size="medium" color="white" />
      </div>
    </div>
  );
};

export default Header;
