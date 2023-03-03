import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTE_NAMES.HOME} className={styles.button}>
        Home Page
      </Link>
      <Link to={ROUTE_NAMES.COUNTER} className={styles.button}>
        COUNTER
      </Link>
    </div>
  );
};

export default Header;
