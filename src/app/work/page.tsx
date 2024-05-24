import React from "react";

// scss import
import styles from "./Work.module.scss";

// components import
import Header from "@/components/organisms/Header";
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import SubPageBody from "@/components/templates/SubPageBody";
import WorkContent from "./WorkContent";

const Work = () => {
  return (
    <div className={styles.work}>
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
            text: "WORK",
            link: "/work",
          },
        ]}
        title={<h1 className={styles.title}>WORK</h1>}
        desc={
          "On this page you can get an overview of our community, HOKULEA. Find out about us."
        }
        image={"/images/party.jpg"}
      />
      <ScrollText />
      {/* main content */}
      <SubPageBody id={2}>
        <WorkContent />
      </SubPageBody>
    </div>
  );
};

export default Work;
