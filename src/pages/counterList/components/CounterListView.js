import PropTypes from "prop-types";
import { memo } from "react";

import CounterView from "../../../components/CounterView/CounterView";

const CounterListView = ({
  counters,
  handleAddCounter,
  handleDeleteAllCounters,
  handleDeleteCounter,
  handleIncrement,
  handleDecrement,
  handleReset,
  totalValue,
}) => {
  const averageValue = counters.length ? totalValue / counters.length : 0;
  return (
    <div>
      <div>
        <p>Total: {totalValue}</p>
        <p>Average: {averageValue.toFixed(2)}</p>
        <p>Counters amount: {counters.length} </p>
      </div>
      <button onClick={handleAddCounter}>Add Counter</button>
      <button onClick={handleDeleteAllCounters}>Delete counters</button>
      <div>
        {counters.map(({ id, countValue }) => (
          <CounterView
            key={id}
            id={id}
            countValue={countValue}
            handleDeleteCounter={handleDeleteCounter}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleReset={handleReset}
          />
        ))}
      </div>
    </div>
  );
};

CounterListView.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      countValue: PropTypes.number,
    }).isRequired
  ),
  handleAddCounter: PropTypes.func.isRequired,
  handleDeleteAllCounters: PropTypes.func.isRequired,
  handleDeleteCounter: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  totalValue: PropTypes.number.isRequired,
};

export default memo(CounterListView);
