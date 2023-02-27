import styles from "./styles.module.scss";

const СounterView = ({
  countValue,
  isEven,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: isEven ? "aqua" : "yellow" }}
    >
      <div> {countValue}</div>
      <div> {isEven ? "четное число" : "нечетное число"}</div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default СounterView;
