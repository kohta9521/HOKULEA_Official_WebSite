import React from "react";

// scss import
import styles from "./About.module.scss";

// compoennts import
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import Header from "@/components/organisms/Header";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";

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
      <SubPageSecTitle
        id={1}
        subTitle={'TRUST, EXPERTISE, COLLABORATION AND COMMITMENT'}
        mainTitle="The people are key"
      />
    </div>
  );
};

export default About;
