import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/Slide.module.scss";
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
          <h2 className={styles.title}>Clean Party~</h2>
          <ReadMoreButton
            id={1}
            link="/about"
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
          <h2 className={styles.title}>Seasonal Events~</h2>
          <ReadMoreButton
            id={1}
            link="/about"
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
          <h2 className={styles.title}>UFES~</h2>
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
