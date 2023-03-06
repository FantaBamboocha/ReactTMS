import { useState } from "react";

import CounterListView from "../components/CounterListView";
import CounterContainer from "../../counter/containers/CounterContainer";

const CounterListContainer = () => {
  const [counters, setCounter] = useState([]);

  const handleAddCounter = () => {
    setCounter([
      ...counters,
      <CounterContainer deleteButton={true}></CounterContainer>,
    ]);
  };

  const handleDeleteCounter = (key) => {
    const countersCopy = [...counters];
    const counterIndexToDelete = countersCopy.findIndex(
      (counter) => key === counter.key
    );

    console.log(counterIndexToDelete);
  };

  return (
    <CounterListView
      counters={counters}
      handleAddCounter={handleAddCounter}
      handleDeleteCounter={handleDeleteCounter}
    ></CounterListView>
  );
};

export default CounterListContainer;
