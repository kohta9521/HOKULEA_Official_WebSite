'use client'
import React, { useState } from "react";

// scss import
import styles from './Contact.module.scss'

// components import
import Header from "@/components/organisms/Header";
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import SubPageBody from "@/components/templates/SubPageBody";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageMainText from "@/components/molecules/SubPageMainText";
import PersonalForm from "@/components/organisms/PersonalForm";
import SpaceBox from "@/components/atoms/SpaceBox";

const Contact = () => {
  // formの切り替え
  const [form, setForm] = useState<'personal' | 'company'>('personal');
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
            For any queries,<br />
            please contact us at the bottom of the page.
          </h1>
        }
        desc={"We always have the resources to make your story come to life in the best way possible. Please feel free to contact us."}
        image={"/images/party.jpg"}
      />
      <ScrollText />
      <SubPageBody id={7}>
        <SpaceBox id={1} level="medium" />
        <SubPageSecTitle
          id={7}
          subTitle="We are always waiting to hear from you. Let's create something together."
          mainTitle="Contact us"
        />
        {/* 会社概要 */}
        <SubPageMainText id={6} text="■会社概要" />
        <SubPageMainText id={6} text="会社名:     株式会社HOKULEA" />
        <SubPageMainText id={6} text="設立:     023年12月14日設立" />
        <SubPageMainText id={6} text="資本:     資本金100万円" />
        <SubPageMainText id={6} text="所在地:     東京都渋谷区神南1-3-4 神南ビル1階" />
        <SubPageMainText id={6} text="事業:     イベント業、クリエイティブ制作事業、観光業" />

        <SpaceBox id={1} level="small" />


        <SubPageMainText id={7} text="私たちは学生が集まり、共に成長し、楽しい時間を過ごすコミュニティです。お問い合わせ、ご質問、提案、または単にこんにちはと言いたい場合、以下のお問い合わせフォームをご利用ください。" />
        <SubPageMainText id={7} text="コンタクトフォームは企業向けと個人向けの2つがございます。お問い合わせ内容によりますが、返答にお時間をいただく場合がございます。学生たちが授業やプロジェクトに没頭している場合、少々お待ちいただくことがありますが、お手続きいただきましたら必ず対応させていただきます。" />
        <SubPageMainText id={7} text="何かご不明点や緊急のお問い合わせがある場合は、SNSアカウントからもお気軽にお知らせください。どうぞよろしくお願いいたします!" />
        <div className={styles.formBox}>
          <div className={styles.flexButton}>
              <button
                  className={`${styles.personalButton} ${form === 'personal' ? styles.active : ''}`}
                  onClick={() => setForm('personal')}
              >
                  個人の方
              </button>
              <button
                  className={`${styles.companyButton} ${form === 'company' ? styles.active : ''}`}
                  onClick={() => setForm('company')}
              >
                  法人の方
              </button>
          </div>
          <div className={styles.formBox}>
          {form === 'personal' ? (
              <div className={styles.box}>
                <PersonalForm />
              </div>
          ) : (
              <div className={styles.box}>
              <h1 style={{color: 'white'}}>法人のお客様用お問い合わせフォーム</h1>
              </div>
          )}
          </div>
      </div>
      </SubPageBody>
    </div>
  );
};

export default Contact;
