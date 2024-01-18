"use client";
import React, { useEffect } from "react";

// aos imports
import AOS from "aos";
import "aos/dist/aos.css";

// scss import
import styles from "./CommunityContent.module.scss";

// components import
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageMainText from "@/components/molecules/SubPageMainText";
import Image from "next/image";
import Link from "next/link";

const CommunityContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // アニメーションの持続時間
      once: true, // アニメーションを一度だけ実行する
    });
  }, []);
  return (
    <div className={styles.container}>
      <SubPageSecTitle
        id={7}
        subTitle={"Introducing the communities we operate"}
        mainTitle="Our Communities"
      />
      <SubPageMainText
        id={1}
        text={"HOKLEAコミュニティの中にはそれぞれ4つのコミュニティがあります。"}
      />
      {/* 4つのコミュニティ 後々コンポーネント化したい */}
      <div className={styles.community}>
        <div className={styles.titleFlexBox}>
          <h1 className={styles.titleNumber}>1</h1>
          <div className={styles.titleRow}>
            <h3 className={`${styles.titleText} ${styles.yellow}`}>OUTDOOR</h3>
            <h3 className={styles.mainTitle}>SHIKI</h3>
          </div>
        </div>
        <div className={styles.contentBox}>
          <Image
            className={styles.image}
            src={"/images/outdoor.png"}
            alt={"SHIKI"}
            width={600}
            height={400}
          />
          <SubPageMainText
            id={1}
            text="山、海、川。ネイチャーアクティビティ好きな若者が集うコミュニティ"
          />
          <Link className={styles.link} href="/community/outdoor">
            View More
          </Link>
        </div>
      </div>
      {/* 2 */}
      <div className={styles.community}>
        <div className={styles.titleFlexBox}>
          <h1 className={styles.titleNumber}>2</h1>
          <div className={styles.titleRow}>
            <h3 className={`${styles.titleText} ${styles.blue}`}>SURFING</h3>
            <h3 className={styles.mainTitle}>Gnarlys</h3>
          </div>
        </div>
        <div className={styles.contentBox}>
          <Image
            className={styles.image}
            src={"/images/surfingteam.jpg"}
            alt={"rover"}
            width={600}
            height={400}
          />
          <SubPageMainText
            id={1}
            text="初心者からプロまで。海を愛し、サーフカルチャーを愛する若者のサーフコミュニティ"
          />
          <Link className={styles.link} href="/community/surf">
            View More
          </Link>
        </div>
      </div>
      <div className={styles.community}>
        <div className={styles.titleFlexBox}>
          <h1 className={styles.titleNumber}>3</h1>
          <div className={styles.titleRow}>
            <h3 className={`${styles.titleText} ${styles.green}`}>
              ENVIRONMENT
            </h3>
            <h3 className={styles.mainTitle}>VYBE</h3>
          </div>
        </div>
        <div className={styles.contentBox}>
          <Image
            className={styles.image}
            src={"/images/beachclean.jpg"}
            alt={"rover"}
            width={600}
            height={400}
          />
          <SubPageMainText
            id={1}
            text="山、海、川。ネイチャーアクティビティ好きな若者が集うコミュニティ"
          />
          <Link className={styles.link} href="/community/vybe">
            View More
          </Link>
        </div>
      </div>
      <div className={styles.community}>
        <div className={styles.titleFlexBox}>
          <h1 className={styles.titleNumber}>4</h1>
          <div className={styles.titleRow}>
            <h3 className={`${styles.titleText} ${styles.red}`}>EVENT</h3>
            <h3 className={styles.mainTitle}>Luten</h3>
          </div>
        </div>
        <div className={styles.contentBox}>
          <Image
            className={styles.image}
            src={"/images/party.jpg"}
            alt={"rover"}
            width={600}
            height={400}
          />
          <SubPageMainText
            id={1}
            text="新進気鋭でcoolな若者がプロデュース。時代とクリエイティブを意識したイベントチーム"
          />
          <Link className={styles.link} href="/community/event">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityContent;
