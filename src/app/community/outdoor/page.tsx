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
import SpaceBox from "@/components/atoms/SpaceBox";

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
        <SubPageMainText id={1} text="Coolな若者とともにアウトドア体験。" />
        <SubPageMainText id={1} text="場所決め、工程作り、場所の許可取りや備品の手配、アウトドア保険、先方のプロダクトを身につけ、アウトドア体験を行います。 エリアやイベントの規模、参加人数は要相談。" />
        <SpaceBox id={1} level="small" />
        <SubPageSubSecTitle
          id={0}
          text="SNS PR"
        />
        <SubPageMainText id={1} text="Instagramにて案件の投稿制作、発信を行います。" />
        <SubPageMainText id={1} text="オプションにてメンバーの個人アカウントでも発信を行います。" />
        <SpaceBox id={1} level="small" />
        <SubPageSubSecTitle
          id={0}
          text="Products Produce"
        />
        <SubPageMainText id={1} text="若者の感性を元に今の時代にあったプロダクトの制作に支援いたします。" />
        <SpaceBox id={1} level="small" />
        <SubPageSubSecTitle
          id={0}
          text="Outdoor Consulting"
        />
        <SubPageMainText id={1} text="今の時代を生き、かつアウトドアの知見あるクリエイティブな若者の考えや目線を伝え向上と指針を示す援助をいたします。" />
        <SpaceBox id={1} level="small" />
        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="協賛事例"
        />
        <SubPageMainText id={1} text="comming soon...." />
      </SubChildPage>
    </div>
  );
};

export default Outdoor;
