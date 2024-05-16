import React from "react";

// next
import Image from "next/image";

// scss import
import styles from "./styles/Team.module.scss";

// components import
import SecTitle from "../atoms/SecTitle";
import ReadMoreButton from "../atoms/ReadMoreButton";

const Team = () => {
  return (
    <div className={styles.team}>
      <div className={styles.container}>
        <SecTitle
          id={4}
          number={"05"}
          jaTitle={"チームメイト"}
          enTitle={"TEAM"}
        />
        <Image
          className={styles.image}
          width={1000}
          height={500}
          alt="チーム画像"
          src="/images/new/1222.jpg"
        />
        <div className={styles.rightBox}>
          <ReadMoreButton
            id={1}
            link="/team"
            text="READ MORE"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
