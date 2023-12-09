import React from "react";

// scss import
import styles from './Community.module.scss';
import Header from "@/components/organisms/Header";
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";

// components import

const Community = () => {
  return (
    <div className={styles.community}>
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
                text: "COMMUNITY",
                link: "/community"
            }
          ]
        }
        title={
          <h1 className={styles.title}>
            Introducing many of the wonderful<br />
            communities we operate
          </h1>
        }
        desc={"We run a number of great, multi-genre communities. Please take a look here."}
        image={"/images/party.jpg"}
      />
      <ScrollText />
    </div>
  );
};

export default Community;
