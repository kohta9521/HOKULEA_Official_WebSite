// css import
import styles from "../styles/page.module.css";

// components import
import Header from '../components/organisms/menu/index';

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <h1 className={styles.title}>Hello HOKULEA New Website!!!</h1>
    </div>
  );
}