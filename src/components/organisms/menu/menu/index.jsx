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
    // description: "To See Everything",
  },
  {
    title: "ABOUT",
    subTitle: "Hokuleaについて",
    link: "/company",
  },
  {
    title: "COMMUNITY",
    subTitle: "コミュニティについて",
    link: "/service",
  },
  {
    title: "WORK",
    subTitle: "お仕事や依頼について",
    link: "/member",
  },
  {
    title: "SERVICES",
    subTitle: "各種サービスについて",
    link: "/pressrelease",
  },
  {
    title: "VISION",
    subTitle: "ビジョンについて",
    link: "/career",
  },
  {
    title: "TEAM",
    subTitle: "一緒に作り上げるチームメイト",
    link: "/career",
  },
  {
    title: "CONTACT",
    subTitle: "お問い合わせ",
    link: "/contact",
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
          {menu.map((el, index) => {
            return <Link data={el} index={index} key={index} />;
          })}
        </div>
        {/* <div className={styles.rightLists}>
            <h1>fuck</h1>
          </div> */}
      </div>
    </div>
  );
}
