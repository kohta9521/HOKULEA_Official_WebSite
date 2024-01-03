import React from "react";

// scss import
import styles from './Vision.module.scss';
import Header from "@/components/organisms/Header";
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageBody from "@/components/templates/SubPageBody";
import SubPageMainText from "@/components/molecules/SubPageMainText";
import SubPageInsertImage from "@/components/atoms/SubPageInsertImage";

// components import

const Vision = () => {
  return (
    <div className={styles.vision}>
      <Header />
      <SubPageHeroLayout
        id={5}
        linklevel={
          [
            {
                id: 1,
                text: "HOME",
                link: "/"
            },
            {
                id: 2,
                text: "VISION",
                link: "/vision"
            }
          ]
        }
        title={
          <h1 className={styles.title}>
            What HOKULEA aims for<br />
            and about us
          </h1>
        }
        desc={"On this page you can get an overview of our community, HOKULEA. Find out about us."}
        image={"/images/party.jpg"}
      />
      <ScrollText />
      {/* main content */}
      <SubPageBody id={1} >
        {/* Vision */}
        <SubPageSecTitle
          id={3}
          subTitle={'Our mission has to do with society.'}
          mainTitle="Vision"
        />
        <SubPageMainText id={9} text={'「 HOKULEA(=喜びの星)を人々に、社会に 」'} />
        <SubPageMainText id={9} text={'「社会にイイこと、めっちゃ楽しく」をミッションにしているのは「HOKULEA（=喜びの星）を人々に、社会に」という展望があるから。'} />
        <SubPageMainText id={9} text={'HOKULEAはコロナ禍で設立されました。この期間で我々は人々が交流できる場がいかに貴重であり、大事なことなのかを知りました。'} />
        <SubPageMainText id={9} text={'オンラインやリモートで完結できることを知ったのにも関わらず今こうして直接人と対面し楽しんでいるのは、人と交流する場が我々の楽しみであり喜びであるからです。また同時期に地方に暮らし始める人や自然のアクティビティが増えたように自然と対峙する時間がいかに人間の心のゆとりを作り幸せなことなのかも知りました。'} />
        <SubPageInsertImage
          id={1}
          image={"/images/about.jpg"}
          alt={"HOKULEA"}
        />
        <SubPageMainText id={9} text={'HOKULEAの中には4つのコミュニティがあります。アウトドア、サーフィン、環境、イベント。'} />
        <SubPageMainText id={9} text={'これは我々は自然が喜びで人との交流がHOKULEA（=喜び）であるからです。'} />
        <SubPageMainText id={9} text={'自然が好きだからこそアウトドアアクティビティをする。自然が好きだからこそ自然保全活動も行う。'} />
        <SubPageMainText id={9} text={'渋谷という街が好きで楽しませてもらっているからこそ、渋谷の街をクリーンアップ。'} />
        <SubPageMainText id={9} text={'社会活動でもめっちゃ楽しいイベントなら参加者も楽しい。これはHOKULEA（=喜びの星）だ。'} />
        <SubPageMainText id={9} text={'そしてこの楽しさと活動を伝えるために人々に、社会に魅せていく。'} />
        <SubPageMainText id={9} text={'参加者や社会が喜ぶようなイベントを行う。それがHOKULEA。'} />
        <SubPageMainText id={9} text={' そしてそれを人々や社会に波及していく、これがHOKULEA。'} />
        <SubPageMainText id={9} text={' なぜなら「HOKULEA（=喜びの星）を人々に、社会に」がViSIONだから。'} />
        <SubPageInsertImage
          id={1}
          image={"/images/about.jpg"}
          alt={"HOKULEA"}
        />
      </SubPageBody>
    </div>
  );
};

export default Vision;
