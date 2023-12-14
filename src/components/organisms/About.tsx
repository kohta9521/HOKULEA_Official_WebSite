import React from "react";

// scss import
import styles from "./styles/About.module.scss";

// components import
import SecTitle from "../atoms/SecTitle";
import ReadMoreButton from "../atoms/ReadMoreButton";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <SecTitle
          id={1}
          number={"01"}
          jaTitle={"『HOKULEA』とは"}
          enTitle={"ABOUT"}
        />
        <div className={styles.flexBox}>
          <div className={styles.leftBox}>
            <img className={styles.image} src="/images/about.jpg" alt="aboutImage" />
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
              <a href="/about">aboutpage</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
