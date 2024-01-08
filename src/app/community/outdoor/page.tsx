import React from "react";

// scss import
import styles from './Outdoor.module.scss'

// components import
import Header from "@/components/organisms/Header";
import SubChildPage from "@/components/templates/SubChildPage";

const Outdoor = () => {
  return (
    <div className={styles.outdoor}>
      <Header />
      <SubChildPage
        id={1}
        subTitle="OUTDOOR"
        title="ROVER"
        desc="We don't just end up playing activities as friends. Outdoor Community"
      >
        {/* main content */}
        <h1>hello</h1>
      </SubChildPage>
    </div>
  );
};

export default Outdoor;
