import React from "react";

// scss import
import styles from './Contact.module.scss'

// components import
import Header from "@/components/organisms/Header";
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import SubPageBody from "@/components/templates/SubPageBody";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageMainText from "@/components/molecules/SubPageMainText";

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
      <SubPageBody id={7}>
        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="Contact us"
        />
        <SubPageMainText id={7} text="私たちは学生が集まり、共に成長し、楽しい時間を過ごすコミュニティです。お問い合わせ、ご質問、提案、または単にこんにちはと言いたい場合、以下のお問い合わせフォームをご利用ください。" />
        <SubPageMainText id={7} text="注意" />
        <SubPageMainText id={7} text="コンタクトフォームは企業向けと個人向けの2つがございます。お問い合わせ内容によりますが、返答にお時間をいただく場合がございます。学生たちが授業やプロジェクトに没頭している場合、少々お待ちいただくことがありますが、お手続きいただきましたら必ず対応させていただきます。" />
        <SubPageMainText id={7} text="何かご不明点や緊急のお問い合わせがある場合は、emergency@ikeikecommunity.com まで直接ご連絡いただくか、SNSアカウントからもお気軽にお知らせください。どうぞよろしくお願いいたします！HOKULEA" />
      </SubPageBody>
    </div>
  );
};

export default Contact;
