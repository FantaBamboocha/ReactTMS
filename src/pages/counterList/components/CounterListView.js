import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

const CounterListView = ({
  counters,
  handleAddCounter,
  handleDeleteCounter,
}) => {
  return (
    <div>
      <button onClick={handleAddCounter}> Add Counter </button>
      <button> Reset </button>

      {counters.map((counter) => {
        const key = uuid();
        return <div key={key}>{counter}</div>;
      })}
    </div>
  );
};

CounterListView.propTypes = {
  counters: PropTypes.array.isRequired,
  handleAddCounter: PropTypes.func.isRequired,
};

export default CounterListView;
