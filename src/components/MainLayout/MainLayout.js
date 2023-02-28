import Header from "../Header/Header";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
