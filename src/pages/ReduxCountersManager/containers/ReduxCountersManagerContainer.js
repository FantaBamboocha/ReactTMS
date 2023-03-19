import { useDispatch, useSelector } from "react-redux";
import CounterView from "../../../components/CounterView/CounterView";

import {
  createCounter,
  incrementCounter,
  removeCounter,
} from "../actions/actions";

import { countersSelector } from "../selectors/selectors";

const ReduxCountersManagerContainer = () => {
  const dispatch = useDispatch();

  const countersState = useSelector(countersSelector);

  const handleCreateCounter = () => {
    dispatch(createCounter());
  };

  const handleRemoveCounter = (id) => {
    dispatch(removeCounter(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementCounter(id));
  };
  return (
    <div>
      <h1>Redux</h1>

      <button onClick={handleCreateCounter}> create Counter</button>
      <div>
        {countersState.map(({ id, countValue }) => (
          <CounterView
            key={id}
            id={id}
            countValue={countValue}
            handleDeleteCounter={handleRemoveCounter}
            handleIncrement={handleIncrement}
          />
        ))}
      </div>
    </div>
  );
};

export default ReduxCountersManagerContainer;
