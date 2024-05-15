"use client";
import React, { useEffect } from "react";

// scss
import styles from "./styles/Work.module.scss";

// components
import SecTitle from "../atoms/SecTitle";
import WorkCard from "../molecules/WorkCard";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.work}>
      <div className={styles.container}>
        <SecTitle id={2} number="02" jaTitle="実績" enTitle="WORK" />
        <div className={styles.flexBox} data-aos="fade-up">
          <WorkCard
            id={1}
            image="/images/new/171.jpg"
            title="UNILEVER PROJECT"
            link="/work"
          />
          <WorkCard
            id={2}
            image="/images/new/50.jpg"
            title="EVENT PROJECT"
            link="/work"
          />
          <WorkCard
            id={3}
            image="/images/new/95.png"
            title="Surfrider Foundation PROJECT"
            link="/work"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
