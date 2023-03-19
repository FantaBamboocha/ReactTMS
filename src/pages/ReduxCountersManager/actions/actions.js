import { createAction } from "redux-actions";

// const CREATE_COUNTER = "CREATE_COUNTER"

// const createCounter = (payload)=>{
//     return {
//         type: CREATE_COUNTER,
//         payload,
//     };
// };

// createCounter(0);

export const createCounter = createAction("CREATE_COUNTER");
export const removeCounter = createAction("REMOVE_COUNTER");
export const incrementCounter = createAction("INCREMENT_COUNTER");
export const decrementCounter = createAction("DECREMENT_COUNTER");
export const resetCounter = createAction("RESET_COUNTER");
export const removeAllCounters = createAction("REMOVE_ALL_COUNTERS");
