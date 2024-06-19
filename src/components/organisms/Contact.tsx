import React from "react";
import Link from "next/link";

// scss import
import styles from "./styles/Contact.module.scss";

// components import
import SecTitle from "../atoms/SecTitle";
import ReadMoreButton from "../atoms/ReadMoreButton";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <SecTitle
          id={5}
          number={"07"}
          jaTitle={"お問い合わせ"}
          enTitle={"CONTACT"}
        />
        <p className={styles.text}>
          以下のボタンよりお問い合わせページに移動しますのでそちらからよろしくお願いします。
          <br />
          入力が完了いたしますと入力完了メールが自動で送信されます。ご確認ください。
        </p>
        <ReadMoreButton
          id={5}
          link="/contact"
          text="VISIT PAGE"
          textColor="white"
        />
      </div>
    </div>
  );
};

export default Contact;
