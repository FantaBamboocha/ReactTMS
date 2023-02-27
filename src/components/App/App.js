import CounterContainer from "../counter/containers/CounterContainer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <CounterContainer />
    </div>
  );
}

export default App;
