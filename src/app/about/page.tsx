import React from "react";

// scss import
import styles from "./About.module.scss";

// components import
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import Header from "@/components/organisms/Header";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageBody from "@/components/templates/SubPageBody";
import SubPageMainText from "@/components/molecules/SubPageMainText";

const About = () => {
  return (
    <div className={styles.about}>
      <Header />
      <SubPageHeroLayout
        id={1}
        linklevel={
          [
            {
                id: 1,
                text: "HOME",
                link: "/"
            },
            {
                id: 2,
                text: "ABOUT",
                link: "/about"
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
        <SubPageSecTitle
          id={1}
          subTitle={'TRUST, EXPERTISE, COLLABORATION AND COMMITMENT'}
          mainTitle="The people are key"
        />
        <SubPageMainText id={1} text={'2020年 コロナ禍で交流が無くなってしまったZ世代に、集える場、楽しめる場を提供するためサーフコミュニティ HOKULEA設立。'}  />
        <SubPageMainText id={1} text={'2020年  会員メンバーは3年連続100人以上在籍。在籍者は国内外の大学生や専門学生と様々。活動はサーフィンから始まり海のアクティビティや他アウトドア、また保全活動やイベントを行なっている。 HOKULEA設立。'}  />
        <SubPageMainText id={1} text={'企業やNPO団体とも積極的に協業。 2023年に 株式会社HOKULEA。Z世代のクリエイティブとエナジーを活かした事業、イベントを行う。'}  />

      </SubPageBody>
    </div>
  );
};

export default About;
