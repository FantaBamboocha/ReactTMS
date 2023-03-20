import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions/actions";

const initialState = {
  counters: [],
};

const ReduxCountersManagerReducer = handleActions(
  {
    [actions.createCounter]: (state) => {
      const newCounter = {
        id: uuid(),
        countValue: 0,
      };

      const stateCopy = structuredClone(state);

      stateCopy.counters.push(newCounter);

      return stateCopy;

      // return {
      //   ...state,
      //   counters: [...state.counters, newCounter],
      // };
    },

    [actions.removeCounter]: (state, { payload: counterId }) => {
      const stateCopy = structuredClone(state);
      const indexToDelete = stateCopy.counters.findIndex(
        ({ id }) => counterId === id
      );

      stateCopy.counters.splice(indexToDelete, 1);

      return stateCopy;
    },

    [actions.incrementCounter]: (state, { payload: counterId }) => {
      const stateCopy = structuredClone(state);
      const counterToIncrement = stateCopy.counters.find(
        ({ id }) => counterId === id
      );

      counterToIncrement.countValue += 1;

      return stateCopy;
    },
  },
  initialState
);

export default ReduxCountersManagerReducer;
