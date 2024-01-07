'use client'
import React, { useEffect } from "react";
import Image from "next/image";

// scss import
import styles from "./styles/About.module.scss";

// components import
import SecTitle from "../atoms/SecTitle";
import ReadMoreButton from "../atoms/ReadMoreButton";

// aos imports
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // アニメーションの持続時間
      once: true, // アニメーションを一度だけ実行する
    });
  }, []);
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <SecTitle
          id={1}
          number={"01"}
          jaTitle={"『HOKULEA』とは"}
          enTitle={"ABOUT"}
        />
        <div className={styles.flexBox} data-aos="fade-up">
          <div className={styles.leftBox}>
            <Image className={styles.image} width={1000} height={500} src="/images/about2.jpg" alt="aboutImage" priority={true} quality={70} />
          </div>
          <div className={styles.rightBox}>
            <h1 className={styles.title}>Community of Generation Z</h1>
            <p className={styles.text}>
              若者のクリエイティブとエナジーが行き交う場。<br />
              今までにない若者のコミュニティがここにはある。<br />
              そんな彼らと「魅せる」と「楽しむ」をモットーに様々なジャンルのイベントを作り上げます。<br />
            </p>
            <div className={styles.buttonBox}>
              <ReadMoreButton id={1} link="/about" text="READ MORE" textColor="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
