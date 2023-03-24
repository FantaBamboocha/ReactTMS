import { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import CounterListView from "../components/CounterListView";

const CounterListContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = () => {
    const newCounter = {
      id: uuid(),
      countValue: 0,
    };

    setCounters((state) => {
      const updatedCounters = state.map((counter) => {
        return {
          ...counter,
          countValue:
            counter.countValue % 2 === 0
              ? (counter.countValue += 1)
              : counter.countValue,
        };
      });

      return [...updatedCounters, newCounter];
    });
  };

  const handleDeleteAllCounters = () => {
    setCounters([]);
  };

  const handleDeleteCounter = useCallback((id) => {
    setCounters((state) => {
      const copyCounters = [...state];
      const indexToDelete = copyCounters.findIndex(
        (counter) => id === counter.id
      );

      copyCounters.splice(indexToDelete, 1);

      const updatedCounters = copyCounters.map((counter) => {
        return {
          ...counter,
          countValue:
            counter.countValue % 2 === 0
              ? counter.countValue
              : (counter.countValue -= 1),
        };
      });

      return updatedCounters;
    });
  }, []);

  // useEffect(() => console.log("Delete one"), [handleDeleteCounter]);

  const handleIncrement = useCallback((id) => {
    setCounters((state) => {
      const copyCounters = structuredClone(state);
      const foundCounter = copyCounters.find((counter) => counter.id === id);

      foundCounter.countValue += 1;

      return copyCounters;
    });
  }, []);

  // useEffect(() => console.log("Increment"), [handleIncrement]);

  const handleDecrement = useCallback((id) => {
    setCounters((state) => {
      const copyCounters = [...state];
      const foundCounter = copyCounters.find((counter) => counter.id === id);

      foundCounter.countValue -= 1;

      return copyCounters;
    });
  }, []);

  // useEffect(() => console.log("Decrement"), [handleDecrement]);

  const handleReset = useCallback((id) => {
    setCounters((state) => {
      const copyCounters = structuredClone(state);
      const foundCounter = copyCounters.find((counter) => counter.id === id);

      foundCounter.countValue = 0;

      return copyCounters;
    });
  }, []);

  // useEffect(() => console.log("Reset"), [handleReset]);

  const totalValue = counters.reduce(
    (result, { countValue }) => result + countValue,
    0
  );

  console.log("Container rendered");

  return (
    <CounterListView
      counters={counters}
      handleAddCounter={handleAddCounter}
      handleDeleteAllCounters={handleDeleteAllCounters}
      handleDeleteCounter={handleDeleteCounter}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
      totalValue={totalValue}
    ></CounterListView>
  );
};

export default CounterListContainer;
