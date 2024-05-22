import React from "react";

// scss import
import styles from "./Team.module.scss";
import Header from "@/components/organisms/Header";
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import SubPageBody from "@/components/templates/SubPageBody";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageMainText from "@/components/molecules/SubPageMainText";

// components

// member json import
import members from "./member.json";
import PersonCard from "@/components/molecules/PersonCard";

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
        title={
          <h1 className={styles.title}>
            What HOKULEA aims for
            <br />
            and about us
          </h1>
        }
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
