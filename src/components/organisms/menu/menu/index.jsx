import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../anim";

// scss import
import styles from "./style.module.scss";

// components import
import Link from "./link";

const menu = [
  {
    title: "HOME",
    subTitle: "ホーム",
    link: "/",
  },
  {
    title: "ABOUT",
    subTitle: "HOKULEAについて",
    link: "/about",
  },
  {
    title: "WORK",
    subTitle: "過去の仕事",
    link: "/work",
  },
  {
    title: "SERVICES",
    subTitle: "各種サービスについて",
    link: "/services",
  },
  {
    title: "OUR EVENTS",
    subTitle: "我々のイベント",
    link: "/event",
  },
  {
    title: "TEAM",
    subTitle: "チーム",
    link: "/team",
  },
  {
    title: "COMMUNITY & STUDENTS",
    subTitle: "コミュニティとメンバー",
    link: "/community",
  },
  {
    title: "GALLERY",
    subTitle: "写真一覧",
    link: "/gallery",
  },
  {
    title: "CONTACT",
    subTitle: "お問い合わせ",
    link: "contact",
  },
];

export default function header({ closeMenu }) {
  return (
    <div className={styles.menu}>
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        <div className={styles.leftLists}>
          {menu.map((el, index, link) => {
            return <Link data={el} link={link} index={index} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
