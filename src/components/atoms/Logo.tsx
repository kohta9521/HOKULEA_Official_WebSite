import React from "react";
import Link from "next/link";

// scss import
import styles from "./styles/Logo.module.scss";

// type
export type LogoProps = {
  id: number;
  link: string;
  size?: "small" | "medium" | "large";
  color?: "white" | "black" | "orange";
};

const Logo = ({
  id,
  link = "/",
  size = "medium",
  color = "white",
}: LogoProps) => {
  return (
    <Link
      key={id}
      href={link}
      className={`${styles.logo} ${styles[size]} ${styles[color]}`}
    >
      HOKULEA
    </Link>
  );
};

export default Logo;
