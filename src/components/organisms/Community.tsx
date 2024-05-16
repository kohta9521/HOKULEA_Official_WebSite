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
          number={"04"}
          jaTitle={"コミュニティ&学生"}
          enTitle={"COMMUNITY&STUDENTS"}
        />
        <div className={styles.cardBox}>
          <CommunityCard
            id={1}
            link="/community/surf"
            number="01"
            title="GNARLYS"
            desc="サーフカルチャーを起点に海を愛す若者が集うコミュニティ"
          />
          <CommunityCard
            id={2}
            link="/community/outdoor"
            number="02"
            title="SHIKI"
            desc="自然を愛し、アウトドアアクティビティを好む若者が集うコミュニティ"
          />
          <CommunityCard
            id={3}
            link="/community/vybe"
            number="03"
            title="VYBE"
            desc="COOLかつCASUALに環境問題アクションを行う若者コミュニティ"
          />
          <CommunityCard
            id={4}
            link="/community/event"
            number="04"
            title="EVENT"
            desc="都心の若者の心をくすぐる大規模イベントをプロデュー"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
