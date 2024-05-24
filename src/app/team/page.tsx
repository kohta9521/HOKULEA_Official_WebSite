import React from "react";

// scss import
import styles from "./Team.module.scss";

// components
import Header from "@/components/organisms/Header";
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import SubPageBody from "@/components/templates/SubPageBody";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageMainText from "@/components/molecules/SubPageMainText";

// member json import
import members from "./member.json";
import PersonCard from "@/components/molecules/PersonCard";
import Image from "next/image";

const Team = () => {
  return (
    <div className={styles.team}>
      <Header />
      <SubPageHeroLayout
        id={5}
        linklevel={[
          {
            id: 1,
            text: "HOME",
            link: "/",
          },
          {
            id: 2,
            text: "TEAM",
            link: "/team",
          },
        ]}
        title={<h1 className={styles.title}>TEAM</h1>}
        desc={
          "On this page you can get an overview of our community, HOKULEA. Find out about us."
        }
        image={"/images/beachpartyhouse.jpg"}
      />
      <ScrollText />
      {/* main content */}
      <SubPageBody id={1}>
        <SubPageSecTitle
          id={1}
          subTitle={"TRUST, EXPERTISE, COLLABORATION AND COMMITMENT"}
          mainTitle="Creative Team"
        />
        <SubPageMainText
          id={1}
          text={
            "各業界で活躍しているHOKULEAのチームメンバーを紹介させていただきます。随時更新中。"
          }
        />
        {/* Big Profile two */}
        <div className={styles.box}>
          <div className={styles.profile}>
            <div className={styles.leftBox}>
              <Image
                className={styles.image}
                src="/images/new/91.jpg"
                width={400}
                height={600}
                alt="人物画像"
              />
            </div>
            <div className={styles.rightBox}>
              <p className={styles.sub}>代表取締役</p>
              <h2 className={styles.name}>森 慧太郎</h2>
              <p className={styles.desc}>
                若者には未来があります。エナジーがあり、人によってはとてもクリエイティブなものを持っています。そういった未来ある若者の多くが無個性の道に進んでいきます。なぜか。日本社会が挑戦を良しとしない社会だからです。自分に自信と誇りをもって人生を切り拓いていってほしい。HOKULEAで自分のクリエイティビティとエナジーに自信を持てる&磨ける場を提供する。企業様にも素敵なものを提供し、若者に自信をもってもらう。この相互の流れを作っていくのが我々HOKULEAの思いです。そして日本発祥のHOKULEAを、自信を持って世界に発信していきます。
              </p>
            </div>
          </div>
          <div className={styles.profile}>
            <div className={styles.leftBox}>
              <Image
                className={styles.image}
                src="/images/new/93.jpg"
                width={400}
                height={600}
                alt="人物画像"
              />
            </div>
            <div className={styles.rightBox}>
              <p className={styles.sub}>取締役</p>
              <h2 className={styles.name}>金成 金虎</h2>
              <p className={styles.desc}>
                私たちの世代は、変化と可能性に満ちています。HOKULEAでは、若者が自分自身の力を信じ、創造性と情熱を存分に発揮できる環境を提供します。日本社会は従来、安定と伝統を重んじてきましたが、私たちは変化を恐れず、新しい挑戦を受け入れることで成長できると信じています。私達はコロナ禍に高校や大学へ進学した世代です。従来の当たり前がなくなり、先輩後輩のつながりが弱くなり、個々の個性が試されるようになりました。HOKULEAは、若者が自分自身の特性を理解し、自信を持って表現できる場を作り出します。自分らしさを大切にし、自分の道を切り開くことができる社会を目指します。
              </p>
            </div>
          </div>
        </div>
        {/* Big Profile end */}
        <div className={styles.memberBox}>
          {members.map((member) => (
            <PersonCard
              key={member.id}
              id={member.id}
              name={member.name}
              post={member.post}
              image={member.image}
              desc={member.desc}
            />
          ))}
        </div>
      </SubPageBody>
    </div>
  );
};

export default Team;
