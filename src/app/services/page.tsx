import React from "react";

// scss import
import styles from './Services.module.scss'

// components import
import Header from "@/components/organisms/Header";
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import ServicesContent from "./ServicesContent";
import SubPageBody from "@/components/templates/SubPageBody";


const Services = () => {
  return (
    <div className={styles.services}>
      <Header />
      <SubPageHeroLayout
        id={4}
        linklevel={
          [
            {
              id: 1,
              text: "HOME",
              link: "/"
            },
            {
              id: 2,
              text: "SERVICES",
              link: "/services"
            }
          ]
        }
        title={
          <h1 className={styles.title}>
            About the services we can provide
          </h1>
        }
        desc={"We run a number of great, multi-genre communities. Please take a look here."}
        image={"/images/party.jpg"}
      />
      <ScrollText />
      {/* main content */}
      <SubPageBody id={3}>
        <ServicesContent />
      </SubPageBody>
    </div>
  );
};

export default Services;
