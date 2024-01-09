import React from "react";

// scss import
import styles from './Outdoor.module.scss'

// components import
import Header from "@/components/organisms/Header";
import SubChildPage from "@/components/templates/SubChildPage";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageMainText from "@/components/molecules/SubPageMainText";
import SubPageInsertImage from "@/components/atoms/SubPageInsertImage";
import SubPageSubSecTitle from "@/components/molecules/SubPageSubSecTitle";

const Outdoor = () => {
  return (
    <div className={styles.outdoor}>
      <Header />
      <SubChildPage
        id={1}
        subTitle="OUTDOOR"
        title="ROVER"
        desc="We don't just end up playing activities as friends. Outdoor Community"
      >
        {/* main content */}
        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="About Rover..."
        />
        <SubPageMainText id={1} text="Camping, Trekking, Snowboarding, SUP、、、" />
        <SubPageMainText id={1} text="HOKULEAアウトドアアクティビティのコミュニティ。このコミュニティの強みは、楽しかったで終わらせない、その場所の楽しさを波及し魅せていくこと。なぜならば自然が好きだから。もっと自然の魅力に気がついて欲しい。そんな自然を愛する若者が様々なアウトドアアクティビティを行っています。" />
        <SubPageMainText id={1} text="アウトドアに知見や関心が多いcoolな若者が自然と対峙し素敵な時間と思い出を作っています。" />
        <SubPageInsertImage
          id={1}
          image={"/images/about.jpg"}
          alt={"HOKULEA"}
        />
        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="SERVICE CHARGE"
        />
        <SubPageSubSecTitle
          id={0}
          text="Event Produce"
        />
        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="協賛事例"
        />
      </SubChildPage>
    </div>
  );
};

export default Outdoor;
