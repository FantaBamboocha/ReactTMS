import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  countValue,
  isEven,
  deleteButton,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: isEven ? "aqua" : "brown" }}
    >
      <div> {countValue}</div>
      <div> {isEven ? "четное число" : "нечетное число"}</div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+</button>
        {deleteButton ? <button>X</button> : null}
      </div>
    </div>
  );
};

CounterView.propTypes = {
  countValue: PropTypes.number.isRequired,
  isEven: PropTypes.bool.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default CounterView;
