// css import
import styles from "../styles/page.module.css";

// components import
import MainLayout from "@/components/templates/MainLayout";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import HoverTile from "@/components/organisms/HoverTile";

// components import

export default function Home() {
  return (
    <div className={styles.main}>
      <MainLayout id={1}>
        <Hero />
        <About />
        <HoverTile />
      </MainLayout>
    </div>
  );
}
