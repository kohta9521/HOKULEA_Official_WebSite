'use client'
import React, { useEffect } from "react";

// aos imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// scss import
import styles from "./styles/HeroTitle.module.scss";

const HeroTitle = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // アニメーションの持続時間
      once: true, // アニメーションを一度だけ実行する
    });
  }, []);
  return (
    <div className={styles.heroBox}>
      <p className={styles.subJaTitle}  data-aos="fade-up">今までにない若者のコミュニティ</p>
      <h1 className={styles.title} data-aos="fade-up">Creativity</h1>
      <div className={styles.flexBox}>
        <h1 className={styles.centerTitle} data-aos="fade-up">Energy</h1>
        <p className={styles.textBoxText} data-aos="fade-up">
          A HUB FOSTERING THE DYNAMIC AND UNIQUE CREATIVITY OF YOUTH, OFFERING DIVERSE EVENTS BASED IN TOKYO
        </p>
      </div>
      <h1 className={styles.title} data-aos="fade-up">Synergy</h1>
    </div>
  );
};

export default HeroTitle;
