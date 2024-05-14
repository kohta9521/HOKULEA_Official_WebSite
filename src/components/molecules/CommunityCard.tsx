"use client";
import React, { useEffect } from "react";

// next
import Link from "next/link";

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
      <p className={styles.number}>{number}</p>
      <h1 className={styles.main}>{title}</h1>
      <p className={styles.desc}>{desc}</p>
    </Link>
  );
};

export default CommunityCard;
