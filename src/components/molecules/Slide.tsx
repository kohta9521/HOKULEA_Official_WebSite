import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/Slide.module.scss";

// components
import ReadMoreButton from "../atoms/ReadMoreButton";

const Slide = () => {
  return (
    <div className={styles.box}>
      <div className={styles.card}>
        <Image
          src="/images/new/1003.jpg"
          width={900}
          height={500}
          className={styles.image}
          alt="workImage"
        />
        <div className={styles.flexBox}>
          <h2 className={styles.title}>Clean Party - Cleanup☓Party</h2>
          <ReadMoreButton
            id={1}
            link="https://vybe-3c.my.canva.site/cleanparty"
            text="VIEW MORE"
            textColor="white"
          />
        </div>
      </div>
      <div className={styles.card}>
        <Image
          src="/images/new/1002.jpg"
          width={900}
          height={500}
          className={styles.image}
          alt="workImage"
        />
        <div className={styles.flexBox}>
          <h2 className={styles.title}>
            Seasonal Events - 季節の大規模イベント
          </h2>
          <ReadMoreButton
            id={1}
            link="https://vybe-3c.my.canva.site/seasonal-events"
            text="VIEW MORE"
            textColor="white"
          />
        </div>
      </div>
      <div className={styles.card}>
        <Image
          src="/images/new/1001.jpg"
          width={900}
          height={500}
          className={styles.image}
          alt="workImage"
        />
        <div className={styles.flexBox}>
          <h2 className={styles.title}>UFES - 学生団体合同イベント</h2>
          <ReadMoreButton
            id={1}
            link="https://ufes-2024-official-site.vercel.app/"
            text="VIEW MORE"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
