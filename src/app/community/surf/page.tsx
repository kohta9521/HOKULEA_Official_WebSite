import React from "react";

// scss import
import styles from './Surf.module.scss';

// components import
import Header from "@/components/organisms/Header";
import SubChildPage from "@/components/templates/SubChildPage";


const Surf = () => {
  return (
    <div className={styles.surf}>
      <Header />
      <SubChildPage
        id={2}
        subTitle="SURFING"
        title="Gnarlys"
        desc="surfing community"
      >
        {/* man content */}
        <h1>sample</h1>
      </SubChildPage>
    </div>
  );
};  

export default Surf;
