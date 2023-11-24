// css import
import MainLayout from "@/components/templates/MainLayout";
import styles from "../styles/page.module.css";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";

// components import

export default function Home() {
  return (
    <div className={styles.main}>
      <MainLayout id={1}>
        <Hero />
      </MainLayout>
    </div>
  );
}
