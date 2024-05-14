"use client";
import React, { useEffect } from "react";

// scss
import styles from "./styles/Community.module.scss";

// components
import SecTitle from "../atoms/SecTitle";
import CommunityCard from "../molecules/CommunityCard";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Community = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className={styles.community}>
      <div className={styles.container}>
        <SecTitle
          id={1}
          number={"05"}
          jaTitle={"コミュニティ"}
          enTitle={"COMMUNITY"}
        />
        <div className={styles.cardBox}>
          <CommunityCard
            id={1}
            link="/community/surf"
            number="01"
            title="GNARLYS"
            desc="若者のクリエイティブとエナジーが行き交う場。"
          />
          <CommunityCard
            id={2}
            link="/community/outdoor"
            number="02"
            title="SHIKI"
            desc="若者のクリエイティブとエナジーが行き交う場。"
          />
          <CommunityCard
            id={3}
            link="/community/vybe"
            number="03"
            title="VYBE"
            desc="若者のクリエイティブとエナジーが行き交う場。"
          />
          <CommunityCard
            id={4}
            link="/community/event"
            number="04"
            title="EVENT"
            desc="若者のクリエイティブとエナジーが行き交う場。"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
