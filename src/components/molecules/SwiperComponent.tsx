import React from "react";
import Swiper from "react-id-swiper";
import Link from "next/link";
// import "swiper/css/swiper.css";
import styles from "./styles/SwiperComponent.module.scss";

const slides = [
  { src: "/images/new/1001.jpg", title: "Slide 1", link: "/page1" },
  { src: "/images/new/1002.jpg", title: "Slide 2", link: "/page2" },
  { src: "/images/new/1003.jpg", title: "Slide 3", link: "/page3" },
];

const SwiperComponent: React.FC = () => {
  const params = {
    containerClass: "swiper-container", // Add this to manage the container class
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className={styles.swiperContainer}>
      <Swiper {...params}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <Link href={slide.link}>
              <img src={slide.src} alt={slide.title} className={styles.image} />
              <div className={styles.textOverlay}>
                <h2>{slide.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
