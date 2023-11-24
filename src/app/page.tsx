// css import
import MainLayout from "@/components/templates/MainLayout";
import styles from "../styles/page.module.css";

// components import

export default function Home() {
  return (
    <div className={styles.main}>
      <MainLayout id={1}>
        <h1>hello </h1>
      </MainLayout>
    </div>
  );
}
