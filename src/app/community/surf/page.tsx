import React from "react";

// scss import
import styles from './Surf.module.scss';

// components import
import Header from "@/components/organisms/Header";
import SubChildPage from "@/components/templates/SubChildPage";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageMainText from "@/components/molecules/SubPageMainText";
import SubPageInsertImage from "@/components/atoms/SubPageInsertImage";
import SubPageSubSecTitle from "@/components/molecules/SubPageSubSecTitle";
import SpaceBox from "@/components/atoms/SpaceBox";


const Surf = () => {
  return (
    <div className={styles.surf}>
      <Header />
      <SubChildPage
        id={2}
        subTitle="SURFING"
        title="Gnarlys"
        desc="We don't just end up playing activities as friends. Outdoor Community"
      >
        {/* man content */}
        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="About Gnarlys..."
        />
        <SubPageMainText id={1} text="HOKULEAサーフコミュニティ。サーフカルチャーが好きな若者やサーファーのコミュニティです。" />
        <SubPageMainText id={1} text="男女関係なくまた初心者からプロサーファーまで在籍しています。毎年メンバーは大会に出場。2023年の学連大会ではHOKULEAメンバーが女子ロングボード部門で全国二位、男子Bメンで全国三位を獲得。" />
        <SubPageInsertImage
          id={1}
          image={"/images/about.jpg"}
          alt={"HOKULEA"}
        />
        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="協賛事例"
        />
        <SubPageMainText id={1} text="comming soon..." />
        <SpaceBox id={1} level="medium" />
        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="事業概要"
        />
        <SubPageSubSecTitle
          id={0}
          text="イベントプロデュース,コーディネイト,共催"
        />
        <SubPageSubSecTitle
          id={0}
          text="SNS PR"
        />
        <SubPageSubSecTitle
          id={0}
          text="プロダクト制作"
        />
        <SubPageSubSecTitle
          id={0}
          text="サーフィン コンサルタント"
        />
        <SubPageSubSecTitle
          id={0}
          text="モノ提供"
        />
        <SubPageSubSecTitle
          id={0}
          text="人材派遣"
        />

        <SpaceBox id={1} level="medium" />

        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="SERVICE CHARGE"
        />
        <SubPageSubSecTitle
          id={0}
          text="Event Produce"
        />
        <SubPageMainText id={1} text="Coolな若者とともにサーフィン、イベント。" />
        <SubPageMainText id={1} text="場所決め、工程作り、場所の許可取りや備品の手配、サーフィン保険、先方のロゴのついたグッズを身につけ、サーフィンをしたりイベントを行います。エリアやイベントの規模、参加人数は要相談。" />
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
          text="Products Produce "
        />
        <SubPageMainText id={1} text="若者の感性を元に今の時代にあったプロダクトの制作を支援いたします。" />
        <SpaceBox id={1} level="small" />
        <SubPageSubSecTitle
          id={0}
          text="Surf Consultanting"
        />
        <SubPageMainText id={1} text="今の時代を生き、かつクリエイティブなサーフ系の若者の考えや目線を伝え向上と指針を示す援助をいたします。" />
        <SpaceBox id={1} level="small" />
      </SubChildPage>
    </div>
  );
};

export default Surf;
