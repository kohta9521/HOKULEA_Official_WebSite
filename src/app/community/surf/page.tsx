import React from "react";

// scss import
import styles from "./Surf.module.scss";

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
        img="/images/surfinglesson.jpg"
        desc="We don't just end up playing activities as friends. Outdoor Community"
      >
        {/* man content */}
        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="About Gnarlys..."
        />
        <SubPageMainText
          id={1}
          text="HOKULEAサーフコミュニティ。サーフカルチャーが好きな若者やサーファーのコミュニティです。"
        />
        <SubPageMainText
          id={1}
          text="男女関係なくまた初心者からプロサーファーまで在籍しています。毎年メンバーは大会に出場。2023年の学連大会ではHOKULEAメンバーが女子ロングボード部門で全国二位、男子Bメンで全国三位を獲得。"
        />
        <SubPageInsertImage
          id={1}
          image={"/images/about.jpg"}
          alt={"HOKULEA"}
        />
      </SubChildPage>
    </div>
  );
};

export default Surf;
