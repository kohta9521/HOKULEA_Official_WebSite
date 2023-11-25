import React from "react";

// scss import
import styles from "./styles/About.module.scss";

// components import
import SecTitle from "../atoms/SecTitle";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <SecTitle
          id={1}
          number={"01"}
          jaTitle={"『HOKULEA』とは"}
          enTitle={"ABOUT"}
        />
      </div>
    </div>
  );
};

export default About;
