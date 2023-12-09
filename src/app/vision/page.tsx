import React from "react";

// scss import
import styles from './Vision.module.scss';
import Header from "@/components/organisms/Header";
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageBody from "@/components/templates/SubPageBody";
import SubPageMainText from "@/components/molecules/SubPageMainText";

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
        <SubPageSecTitle
          id={1}
          subTitle={'TRUST, EXPERTISE, COLLABORATION AND COMMITMENT'}
          mainTitle="The people are key"
        />
        <SubPageMainText id={1} text={'我々のコミュニティは若者によって成り立ってます。'}  />
        <SubPageMainText id={1} text={'若者には未来があります。'}  />
        <SubPageMainText id={1} text={' 自分が描いた未来を諦め、無個性の道に進んでいく人を多くみてきました。 '}  />
        <SubPageMainText id={1} text={'せめて我々の周りにはそうなってほしくない。自分に自信と誇りをもって人生を切り拓いていってほしい。HOKULEAを通じて自分のクリエイティビティとエナジーに自信を持って欲しい&磨いていって欲しいと思っております。'}  />
        <SubPageMainText id={1} text={' 企業にも素敵なものを提供し、そして若者にも自信をもってもらう。この相互の流れを作っていくのが我々HOKULEAの思いです。 '}  />
        <SubPageMainText id={1} text={' そして日本発祥のHOKULEAを世界に発信していきます。 '}  />
      </SubPageBody>
    </div>
  );
};

export default Vision;
