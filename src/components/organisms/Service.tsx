"use client";
import React, { useEffect } from "react";
import Link from "next/link";

// aos imports
import AOS from "aos";
import "aos/dist/aos.css";

// scss import
import styles from "./styles/Service.module.scss";

// components import
import SectionBorder from "../atoms/SectionBorder";
import SecTitle from "../atoms/SecTitle";
import ReadMoreButton from "../atoms/ReadMoreButton";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // アニメーションの持続時間
      once: true, // アニメーションを一度だけ実行する
    });
  }, []);
  return (
    <div className={styles.service} id="service">
      <div className={styles.container}>
        {/* TODO: なぜかコンポーネントが読み込まれない */}
        <SectionBorder id={1} color="white" />
        <SecTitle
          id={1}
          number={"03"}
          jaTitle={"各種サービス"}
          enTitle={"SERVICES"}
        />
        <div className={styles.mainTextBox}>
          <p className={styles.text}>
            <span className={styles.accentText}>
              いい技術をもっているのにそれをどう魅せていいかわからない
            </span>
            <br />
            <span className={styles.accentText}>
              アイデアがあるがそれを実現できない
            </span>
            <br />
            <span className={styles.accentText}>感動を与えたい</span>
            <br />
            <br />
            クリエイティブでエナジーある若者とタイアップしてみませんか。
            <br />
            HOKULEAではクリエイティブに富んだメンバーが数多く在籍しています。
            <br />
            貴社のプロダクトやイベントに合わせ、HOKULEAのチームがサポートに入りクリエイティブに仕上げていきます。
            <br />
          </p>
          <ReadMoreButton
            id={1}
            link="/services"
            text="READ MORE"
            textColor="white"
          />
        </div>
        {/* ここから各種サービスの絶対位置の記述 */}
        <div className={`${styles.card} ${styles.card1}`} data-aos="fade-up">
          <p className={styles.cardTitle}>EVENT PRODUCE</p>
          <img
            className={styles.cardImage}
            src="/images/new/39.jpg"
            alt="serviceCardImage"
          />
          <Link
            className={styles.cardVisitButton}
            href={"/services/eventproduce"}
          >
            VIEW MORE ⇨
          </Link>
        </div>
        <div className={`${styles.card} ${styles.card5}`} data-aos="fade-up">
          <p className={styles.cardTitle}>CONSULTING</p>
          <img
            className={styles.cardImage}
            src="/images/new/2.jpg"
            alt="serviceCardImage"
          />
          <Link
            className={styles.cardVisitButton}
            href={"/services/consulting"}
          >
            VIEW MORE ⇨
          </Link>
        </div>
        <div className={`${styles.card} ${styles.card2}`} data-aos="fade-up">
          <p className={styles.cardTitle}>
            PRODUCT
            <br />
            SERVICE PRODUCE
          </p>
          <img
            className={styles.cardImage}
            src="/images/new/58.jpg"
            alt="serviceCardImage"
          />
          <Link
            className={styles.cardVisitButton}
            href={"/services/productserviceproduce"}
          >
            VIEW MORE ⇨
          </Link>
        </div>
        <div className={`${styles.card} ${styles.card3}`} data-aos="fade-up">
          <p className={styles.cardTitle}>
            CAST・HUMAN
            <br />
            RESOURCES
          </p>
          <img
            className={styles.cardImage}
            src="/images/new/19.jpg"
            alt="serviceCardImage"
          />
          <Link
            className={styles.cardVisitButton}
            href={"/services/casthumanresources"}
          >
            VIEW MORE ⇨
          </Link>
        </div>
        <div className={`${styles.card} ${styles.card4}`} data-aos="fade-up">
          <p className={styles.cardTitle}>SNS MARKETING</p>
          <img
            className={styles.cardImage}
            src="/images/new/16.jpg"
            alt="serviceCardImage"
          />
          <Link
            className={styles.cardVisitButton}
            href={"/services/snsmarketing"}
          >
            VIEW MORE ⇨
          </Link>
        </div>
        {/* card components 終了（絶対位置はこの場外である） */}
      </div>
    </div>
  );
};

export default Service;
