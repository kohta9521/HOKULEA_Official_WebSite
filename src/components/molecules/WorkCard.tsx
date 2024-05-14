import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// scss
import styles from "./styles/WorkCard.module.scss";

// props
export type WorkCardProps = {
  id: number;
  image: string;
  title: string;
  link: string;
};

const WorkCard = ({ id, image, title, link }: WorkCardProps) => {
  return (
    <Link href={link} className={styles.workCard} key={id}>
      <Image
        src={image}
        className={styles.image}
        width={300}
        height={200}
        alt="work image"
      />
      <p className={styles.title}>{title}</p>
    </Link>
  );
};

export default WorkCard;
