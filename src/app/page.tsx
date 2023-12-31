// css import
import styles from "../styles/page.module.css";

// components import
import MainLayout from "@/components/templates/MainLayout";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import HoverTile from "@/components/organisms/HoverTile";
import Service from "@/components/organisms/Service";
import Vision from "@/components/organisms/Vision";
import Footer from "@/components/organisms/Footer";
import Student from "@/components/organisms/Student";
import Team from "@/components/organisms/Team";
import Contact from "@/components/organisms/Contact";

// components import

export default function Home() {
  return (
    <div className={styles.main}>
      <MainLayout id={1}>
        <Hero />
        <About />
        {/* <HoverTile /> */}
        <Service />
        <Vision />
        {/* <Student />
        <Team /> */}
        <Contact />
        <Footer />
      </MainLayout>
    </div>
  );
}
