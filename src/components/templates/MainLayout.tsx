import React from "react";

// scss import
import styles from "./styles/MainLayout.module.scss";

// components import
import Header from "../organisms/Header";

// type
export type MainLayoutProps = {
  id: number;
  children: React.ReactNode;
};

const MainLayout = ({ id, children }: MainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      {children}
      {/* TODO：ContactとFooterを追加したい　 */}
    </div>
  );
};

export default MainLayout;
