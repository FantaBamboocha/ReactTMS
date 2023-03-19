import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  id,
  countValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleDeleteCounter,
}) => {
  const isEven = countValue % 2 === 0;

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: isEven ? "aqua" : "brown" }}
    >
      <div> {countValue}</div>
      <div> {isEven ? "четное число" : "нечетное число"}</div>
      <div>
        <button disabled={countValue === 0} onClick={() => handleDecrement(id)}>
          -
        </button>
        <button onClick={() => handleReset(id)}>Reset</button>
        <button onClick={() => handleIncrement(id)}>+</button>
        {handleDeleteCounter && (
          <button onClick={() => handleDeleteCounter(id)}>X</button>
        )}
      </div>
    </div>
  );
};

CounterView.propTypes = {
  id: PropTypes.string,
  countValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleDeleteCounter: PropTypes.func,
};

export default CounterView;
