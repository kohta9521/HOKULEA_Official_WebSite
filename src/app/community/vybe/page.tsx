import React from "react";

// scss import
import styles from "./Vybe.module.scss";

// components import
import Header from "@/components/organisms/Header";
import SubChildPage from "@/components/templates/SubChildPage";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";

const Vybe = () => {
  return (
    <div className={styles.vybe}>
      <Header />
      <SubChildPage
        id={3}
        subTitle="Entertainment"
        title="Vybe"
        img="/images/beachclean.jpg"
        desc="We don't just end up playing activities as friends. Outdoor Community"
      >
        {/* main content */}
        <SubPageSecTitle
          id={8}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="About Vybe..."
        />
      </SubChildPage>
    </div>
  );
};

export default Vybe;
