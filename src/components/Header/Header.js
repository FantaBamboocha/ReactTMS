import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../routes/routeNames";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTE_NAMES.COUNTER} className={styles.button}>
        Counter
      </Link>
      <Link to={ROUTE_NAMES.COUNTER_LIST} className={styles.button}>
        Counter List
      </Link>
      <Link to={ROUTE_NAMES.REDUX_COUNTER_LIST} className={styles.button}>
        Redux Counters
      </Link>
      <Link to={ROUTE_NAMES.FORM} className={styles.button}>
        Forms
      </Link>
      <Link to={ROUTE_NAMES.REDUX_TODO_LIST} className={styles.button}>
        Todo
      </Link>
    </div>
  );
};

export default Header;
