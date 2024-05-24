"use client";
import React from "react";

// next
import Image from "next/image";

// scss
import styles from "./styles/Gallery.module.scss";

// lib
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// components
import SecTitle from "../atoms/SecTitle";

// data
const images = [
  "/images/new/66.jpg",
  "/images/new/89.jpg",
  "/images/new/99.jpg",
  "/images/new/3.jpg",
  "/images/new/12.jpg",
  "/images/new/34.jpg",
  "/images/new/32.jpg",
  "/images/new/111.jpg",
  "/images/new/115.jpg",
  "/images/new/113.jpg",
  "/images/new/17.jpg",
  "/images/new/80.jpg",
  "/images/new/79.jpg",
  "/images/new/170.jpg",
];

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.centerBox}>
        <SecTitle
          id={1}
          number={"06"}
          jaTitle={"ギャラリー"}
          enTitle={"Gallery"}
        />
      </div>

      <div className={styles.container}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {images.map((src, index) => (
              <Image
                key={index}
                width={200}
                height={500}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className={styles.image}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Gallery;
