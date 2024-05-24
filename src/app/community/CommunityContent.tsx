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
import SpaceBox from "@/components/atoms/SpaceBox";

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
        text={
          "学生団体HOKULEAに所属しているメンバー、HOKULEAの4つのコミュニティ"
        }
      />
      <SpaceBox id={1} level="small" />
      <SubPageMainText id={1} text={"・土着した影響力のある若者"} />
      <SubPageMainText id={1} text={"・流行に敏感な若者"} />
      <SubPageMainText id={1} text={"・社交的でアクティブ"} />
      <SpaceBox id={1} level="small" />
      <SubPageMainText id={1} text={"メンバー数は117人（2024年3月現在）"} />
      <SubPageMainText
        id={1}
        text={"選抜されたメンバーで女性と男性の比率が6:4のコミュニティです。"}
      />
      <SubPageMainText
        id={1}
        text={"所属している大学は早慶上智MARCHから女子大とさまざまです。"}
      />
      <SubPageMainText
        id={1}
        text={
          "学生団体HOKULEAに所属しているメンバーは以下のような特徴があります。"
        }
      />
      {/* 4つのコミュニティ 後々コンポーネント化したい */}
      <div className={styles.community}>
        <div className={styles.titleFlexBox}>
          <h1 className={styles.titleNumber}>1</h1>
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
            text="HOKULEAのサーフコミュニティ。サーフカルチャーを起点に海を愛するメンバーが集まっているコミュニティです。年中季節を問わず定期的に海に行ってはサーフィンを行うメンバーが在籍しています。"
          />
          <Link className={styles.link} href="/community/surf">
            View More
          </Link>
        </div>
      </div>
      <div className={styles.community}>
        <div className={styles.titleFlexBox}>
          <h1 className={styles.titleNumber}>2</h1>
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
            text="HOKULEAのアウトドアコミュニティ。都心にいると忘れてしまう人間本来の感覚。自然と定期的に対峙することにより、人間らしさを磨いています。自然を愛す、アウトドアアクティビティを好む若者が集まっているコミュニティです。"
          />
          <Link className={styles.link} href="/community/outdoor">
            View More
          </Link>
        </div>
      </div>
      {/* 2 */}
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
            text="HOKULEAの環境コミュニティ。「世の環境意識を底上げを図る」ことが VYBE のMISSION。そこで憧れ&モチベーションとなる「カッコいい(COOL)」を環境問題（CLEAN)に浸透させるアクションを行う。また最初の一歩の敷居を下げ、興味をもってもらうことを第一に、「CASUAL」に取り組めるイベントを行な学生団体HOKULEAに所属しているメンバーを紹介致します。"
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
            <h3 className={styles.mainTitle}>Event</h3>
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
