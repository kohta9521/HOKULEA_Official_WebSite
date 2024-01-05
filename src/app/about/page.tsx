import React from "react";

// scss import
import styles from "./About.module.scss";

// components import
import SubPageHeroLayout from "@/components/templates/SubPageHeroLayout";
import ScrollText from "@/components/atoms/ScrollText";
import Header from "@/components/organisms/Header";
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageBody from "@/components/templates/SubPageBody";
import SubPageMainText from "@/components/molecules/SubPageMainText";
import SpaceBox from "@/components/atoms/SpaceBox";
import SubPageInsertImage from "@/components/atoms/SubPageInsertImage";

const About = () => {
  return (
    <div className={styles.about}>
      <Header />
      <SubPageHeroLayout
        id={1}
        linklevel={
          [
            {
                id: 1,
                text: "HOME",
                link: "/"
            },
            {
                id: 2,
                text: "ABOUT",
                link: "/about"
            }
          ]
        }
        title={
          <h1 className={styles.title}>
            What HOKULEA aims for<br />
            and about us
          </h1>
        }
        desc={"On this page you can get an overview of our community, HOKULEA. Find out about us."}
        image={"/images/party.jpg"}
      />
      <ScrollText />
      {/* main content */}
      <SubPageBody id={1} >
        {/* HOKULEAとは */}
        <SubPageSecTitle
          id={1}
          subTitle={'About our wonderful organization HOKULEA'}
          mainTitle="What is HOKULEA?"
        />
        <SubPageInsertImage
          id={1}
          image={"/images/about.jpg"}
          alt={"HOKULEA"}
        />
        <SubPageMainText id={1} text={'今までにない Z世代コミュニティHOKULEA'}  />
        <SubPageMainText id={2} text={'ここは若者のクリエイティブとエナジーが行き交う場。'}  />
        <SubPageMainText id={3} text={'ゴミ拾いにクリエイティブを掛け合わせた「Clean party」'}  />
        <SubPageMainText id={4} text={'エナジーが溢れ出た結果、事前登録招待制で700人以上参加した「Halloween Party」気鋭があり、社交的で自然を愛するcoolな若者が所属しています。'}  />
        <SubPageMainText id={5} text={'そんな限りない可能性と様々なバックグラウンドを持つ若者と共に創りあげませんか？'}  />
        <SubPageMainText id={6} text={'シナジーを感じるジャンルを超えたイベントやプロダクト/サービス。'}  />
        <SubPageMainText id={7} text={'センスある若者の目線を元に「魅せる」と「楽しむ」を意識した面白いコトをしたいならHOKULEA。'}  />

        <SpaceBox id={1} level="medium" />

        {/* COncept */}
        <SubPageSecTitle
          id={2}
          subTitle={'What we are aiming for and what we are going to do in the future'}
          mainTitle="Our Concept"
        />
        <SubPageMainText id={8} text={'「それ、俺らが波及させる」'} />
        <SubPageMainText id={9} text={'とってもイイことも魅せ方を間違えるとうまく伝えることができません。'} />
        <SubPageMainText id={9} text={'イイこともクリエイティブな視点と技術がないと人々に刺さることは少ないでしょう。'} />
        <SubPageMainText id={9} text={'イイことも創る人がエネルギッシュでないと熱量を感じられず伝播することは難しいと思います。'} />
        <SubPageMainText id={9} text={'HOKULEAには今の時代に生きる、クリエイティブでエナジーある若者のみ多く集まっています。'} />
        <SubPageMainText id={9} text={'トレンド感があり気鋭でcoolな若者たちが社会に影響を与えていきます。'} />

        <SpaceBox id={1} level="medium" />

        <SubPageInsertImage
          id={1}
          image={"/images/about.jpg"}
          alt={"HOKULEA"}
        />

        {/* Mission */}
        <SubPageSecTitle
          id={3}
          subTitle={'Our mission has to do with society.'}
          mainTitle="Our Mission"
        />
        <SpaceBox id={1} level="medium" />

        <SubPageMainText id={9} text={'「社会にイイこと、めっちゃ楽しく」'} />
        <SubPageMainText id={9} text={'社会 とはsocial。イイこと とはgoodなこと。'} />
        <SubPageMainText id={9} text={'socialなものといえばコミュニティがその一つでしょう。HOKULEAは若者のコミュニティがルーツです。また今でもコミュニティによって成り立っています。'} />
        <SubPageMainText id={9} text={' HOKULEAコミュニティにgoodなことをめっちゃ楽しくやっています。'} />
        <SubPageMainText id={9} text={'またsocialもコミュニティも人があってのもの。'} />
        <SubPageMainText id={9} text={' 一人一人がgoodだと思うことを楽しくやっていきます。'} />
        <SubPageMainText id={9} text={'そして社会とは 世の中、世界。'} />
        <SubPageMainText id={9} text={' 社会にgoodな活動もクリエイティブでエナジーある若者のスパイスを入れ、主催者側も参加側もとっても楽しいことを行なっていきます。'} />
        <SubPageMainText id={9} text={'そう、'} />
        <SubPageMainText id={9} text={'「社会にイイこと、めっちゃ楽しく」のミッションは結果 一人一人に、コミュニティに、さらに社会全体にもHOKULEA(=喜びの星）であるのです。'} />

        <SpaceBox id={1} level="medium" />
      </SubPageBody>
    </div>
  );
};

export default About;

