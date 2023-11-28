import React from "react";

// scss import
import styles from './Contact.module.scss'

// components import
import Header from "@/components/organisms/Header";
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Header />
      <SubPageHeroLayout
        id={7}
        linklevel={
          [
            {
                id: 1,
                text: "HOME",
                link: "/"
            },
            {
                id: 2,
                text: "COMPANY",
                link: "/company"
            }
          ]
        }
        title={
          <h1 className={styles.title}>
            If you have any queries for us,<br />
            please contact us at the bottom of the page.
          </h1>
        }
        desc={"We always have the resources to make your story come to life in the best way possible. Please feel free to contact us."}
        image={"/images/party.jpg"}
      />
      <ScrollText />
    </div>
  );
};

export default Contact;
