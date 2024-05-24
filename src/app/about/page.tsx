"use client";
import React, { useEffect } from "react";

// scss import
import styles from "./About.module.scss";

// aos imports
import AOS from "aos";
import "aos/dist/aos.css";

// components import
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import Header from "@/components/organisms/Header";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageBody from "@/components/templates/SubPageBody";
import SubPageMainText from "@/components/molecules/SubPageMainText";
import SpaceBox from "@/components/atoms/SpaceBox";
import SubPageInsertImage from "@/components/atoms/SubPageInsertImage";

const About = () => {
  // scroll animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // アニメーションの持続時間
      once: true, // アニメーションを一度だけ実行する
    });
  }, []);

  return (
    <div className={styles.about}>
      <Header />
      <SubPageHeroLayout
        id={1}
        linklevel={[
          {
            id: 1,
            text: "HOME",
            link: "/",
          },
          {
            id: 2,
            text: "ABOUT",
            link: "/about",
          },
        ]}
        title={<h1 className={styles.title}>ABOUT</h1>}
        desc={
          "On this page you can get an overview of our community, HOKULEA. Find out about us."
        }
        image={"/images/new/10.jpg"}
      />
      <ScrollText />
      {/* main content */}
      <SubPageBody id={1}>
        {/* HOKULEAとは */}
        <SubPageSecTitle
          id={1}
          subTitle={"About our wonderful organization HOKULEA"}
          mainTitle="What is HOKULEA?"
        />
        <SubPageMainText
          id={1}
          text={
            "2020年 コロナ禍で交流が無くなってしまったZ世代に、Founder森 慧太郎が何か集える場、楽しめる場を提供できないかと考えた結果、屋外でソーシャルディスタンスが取れ、需要がある「サーフィン」に目を向けサーフコミュニティHOKULEAを設立。"
          }
        />
        <SubPageMainText
          id={2}
          text={
            "不定期にサーフィンやサーフカルチャーが好きな方に向けた単発のイベントを開催。翌年4月大学の新学期と同時にコミュニティ化。Z世代の会員制サーフコミュニティとなる。"
          }
        />
        <SpaceBox id={1} level="small" />
        <SubPageMainText
          id={3}
          text={
            "このタイミングで最初の募集にして150名を超えるメンバーが集まる。そのタイミングで現 株式会社HOKULEAの共同創業者となる金成金虎もジョイン。この年はサーフィンのイベントをしつつ海の保全活動のイベントも定期的に行う。"
          }
        />
        <SubPageMainText
          id={4}
          text={
            "また150名を超える社交的なメンバーの集まりと金成金虎のスパイスが加わった結果、イベントを打つ度 都心の若者500人を超える集客ができるコミュニティに成長。またその年には大手日用品ブランドとのアウトドアのプロダクト制作も行う。"
          }
        />
        <SpaceBox id={1} level="small" />
        <SubPageMainText
          id={5}
          text={
            "翌年はサーフィンにとどまらず他のアウトドアのイベントを打ちつつ、社会に影響を与えるイベントも行う。宮下パークの屋上のビーチバレーコートを貸し切ったビーチバレー×パーティイベント、また街のゴミ問題に焦点を置き、ポイ捨てをする層にゴミを拾わせる活動としてゴミ拾い×パーティを掛け合わせたClean Partyを行う。"
          }
        />
        <SubPageMainText
          id={6}
          text={
            "前半は渋谷をクリーンアップ、後半戦は学生初めてクラブBAIAを貸切し、フロアによってクラブの場や若手のアーティストを展示ができる場所、飲食店を経営する若者認知の場を与えるイベントを作り上げ、総計400人を集めた。翌年2023年はアメリカのベンチャー企業と共同でイベントを行い、BAIA SHIBUYAやCE LA VI TOKYOでイベントを行った。"
          }
        />
        <SpaceBox id={1} level="small" />
        <SubPageMainText
          id={7}
          text={
            "この年のハロウィンイベントでは招待制で700人を来場させた。その年 2023年12月14日 森 慧太郎と金成 金虎が共同で法人化。今後はより若者のクリエイティブでエナジーを活かした事業、イベントを拡充させ、時代を作っていく。"
          }
        />

        <SpaceBox id={1} level="medium" />

        {/* Mission */}
        <SubPageSecTitle
          id={3}
          subTitle={"Our mission has to do with society."}
          mainTitle="Our Mission"
        />
        <SubPageInsertImage
          id={1}
          image={"/images/new/155.jpg"}
          alt={"HOKULEA"}
        />
        <SpaceBox id={1} level="small" />

        <SubPageMainText id={9} text={"「社会にイイこと、めっちゃ楽しく」"} />
        <SubPageMainText
          id={9}
          text={
            "楽しいからアクションに繋がるんだ。社会にgoodな活動、人が喜ぶような活動を、今の時代を創るクリエイティブでエナジーあるイケてる若者のスパイスを入れ、主催者側も参加側もとっても楽しいイベントを行なっていきます。「社会にイイこと、めっちゃ楽しく」のミッションは一人一人に、創る側に、そして社会全体にもHOKULEA(=喜びの星）であるのです。"
          }
        />
        <SpaceBox id={1} level="small" />
        <SubPageInsertImage
          id={1}
          image={"/images/new/78.jpg"}
          alt={"HOKULEA"}
        />
        <SpaceBox id={1} level="small" />

        {/* vision */}
        <SubPageSecTitle
          id={4}
          subTitle={"「HOKULEA（＝喜びの星）を”人々”に、”社会”に」"}
          mainTitle="Our Vision"
        />
        <SubPageInsertImage
          id={1}
          image={"/images/new/62.jpg"}
          alt={"HOKULEA"}
        />
        <SubPageMainText
          id={10}
          text={
            "一人一人が楽しめる場 や 社会を意識した場作り を常に意識しています。安全に楽しめるような招待制を設けたイベント。自然や街に貢献する活動。社会活動でもめっちゃ楽しいイベントなら参加者も楽しい。これらは一人一人に、社会にHOKULEA（＝喜びの星）だ。そしてこの楽しさと活動を伝えるために人々に、社会に魅せていく。参加者が、全体が、社会が 喜ぶようなイベントを行う。それがHOKULEA。そしてそれを人々や社会に波及していく、これがHOKULEA。なぜなら「HOKULEA（＝喜びの星）を人々に、社会に」がViSIONだから。"
          }
        />
        <SpaceBox id={1} level="medium" />

        {/* value */}
        <SubPageSecTitle
          id={4}
          subTitle={"out values are important to us."}
          mainTitle="Value"
        />
        <SubPageInsertImage
          id={1}
          image={"/images/new/4.jpg"}
          alt={"HOKULEA"}
        />
        <SubPageMainText
          id={1}
          text={
            "今の時代に生きる中身も見た目も憧れるシティリーダーやクリエイターが集う場。そして社会にインパクトを与えていけるイベント、コミュニティ。"
          }
        />

        <SpaceBox id={1} level="medium" />
      </SubPageBody>
    </div>
  );
};

export default About;
