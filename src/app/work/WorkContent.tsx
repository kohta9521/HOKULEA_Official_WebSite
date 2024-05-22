import React from "react";

// scss import
import styles from "./WorkContent.module.scss";

// components import
import SubPageSecTitle from "@/components/atoms/SubPageSecTitle";
import SubPageMainText from "@/components/molecules/SubPageMainText";
import SubPageInsertImage from "@/components/atoms/SubPageInsertImage";
import SpaceBox from "@/components/atoms/SpaceBox";

const WorkContent = () => {
  return (
    <div className={styles.work}>
      <SubPageSecTitle
        id={1}
        subTitle={"In this section you will find our track record of work."}
        mainTitle="UNILEVER PROJECT"
      />
      <SubPageInsertImage
        id={1}
        image={"/images/new/171.jpg"}
        alt={"HOKULEA"}
      />
      <SubPageMainText
        id={1}
        text={
          "サーフコミュニティであり、環境コミュニティであるHOKULEAが Unilever と協同して作ったアウトアの方向けの環境に良いソーププロダクト。"
        }
      />
      <SubPageMainText
        id={1}
        text={
          "クラウドファンディングやデザインパッケージの監修も行った。プロダクトのイベントも主催で行う。クラウドフォアンディングでは目標金額の160万円を達成。 現在販売中。"
        }
      />
      <p className={styles.subtext}>
        （参考:https://www.unilever.co.jp/news/press-releases/2023/caeru-project-rexena-the-sustainable-compact-soap/)
      </p>
      <SubPageInsertImage
        id={1}
        image={"/images/new/175.jpg"}
        alt={"HOKULEA"}
      />
      <SubPageInsertImage
        id={1}
        image={"/images/new/176.jpg"}
        alt={"HOKULEA"}
      />
      <SubPageInsertImage
        id={1}
        image={"/images/new/177.jpg"}
        alt={"HOKULEA"}
      />
      <SubPageSecTitle
        id={2}
        subTitle={"In this section you will find our track record of work."}
        mainTitle="EVENT PROJECT"
      />
      <SubPageMainText
        id={1}
        text={
          "アメリカのベンチャー企業から依頼があり複数イベントを開催。プロデュースから広報、会場手配から実際の運営まで全てを受け持ちイベント事業を行った。"
        }
      />
      <SpaceBox id={1} level="medium" />
      <SubPageSecTitle
        id={3}
        subTitle={"In this section you will find our track record of work."}
        mainTitle="Surfrider Foundation PROJECT"
      />
      <SubPageMainText
        id={1}
        text={
          "アメリカのベンチャー企業から依頼があり複数イベントを開催。プロデュースから広報、会場手配から実際の運営まで全てを受け持ちイベント事業を行った。"
        }
      />
      <SpaceBox id={1} level="medium" />
      <SubPageSecTitle
        id={3}
        subTitle={"In this section you will find our track record of work."}
        mainTitle="Surfrider Foundation"
      />
      <SubPageMainText
        id={1}
        text={
          "1984年にカルフォルニアに発足した国際環境NPO団体。現在世界23カ国、約25万人のサポートメンバーが所属している。毎年1万人以上来場するイベント 湘南カーニバルを主催。"
        }
      />
      <SpaceBox id={1} level="medium" />
      <SubPageMainText id={1} text={"●イベント協賛案件"} />
      <SubPageMainText
        id={1}
        text={"過去協賛いただいた企業を掲載させていただいています。"}
      />
    </div>
  );
};

export default WorkContent;
