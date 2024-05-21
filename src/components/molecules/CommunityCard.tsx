"use client";
import React, { useEffect } from "react";

// next
import Link from "next/link";
import Image from "next/image";

// scss
import styles from "./styles/CommunityCard.module.scss";

// props
export type CommunityCardProps = {
  id: number;
  link: string;
  number: string;
  title: string;
  desc: string;
};

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CommunityCard = ({
  id,
  link,
  number,
  title,
  desc,
}: CommunityCardProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Link className={styles.card} href={link} key={id} data-aos="fade-up">
      <div className={styles.flexBox}>
        <p className={styles.number}>{number}</p>
        <h1 className={styles.main}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <MdOutlineKeyboardArrowRight className={styles.icon} />
      </div>

      <div className={styles.hoverImage}>
        <Image
          src="/images/new/2.jpg"
          className={styles.image}
          width={400}
          height={400}
          alt="コミュニティ画像"
        />
      </div>
    </Link>
  );
};

export default CommunityCard;
