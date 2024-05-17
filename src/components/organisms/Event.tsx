"use client";
import React, { useEffect } from "react";

// scss
import styles from "./styles/Event.module.scss";

// components
import SecTitle from "../atoms/SecTitle";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import SwiperComponent from "../molecules/SwiperComponent";

const Event = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className={styles.event}>
      <div className={styles.container}>
        <SecTitle
          id={1}
          number={"04"}
          jaTitle={"我々のイベント"}
          enTitle={"OUR EVENTS"}
        />
        <div className={styles.main}>
          <SwiperComponent />
        </div>
      </div>
    </div>
  );
};

export default Event;
