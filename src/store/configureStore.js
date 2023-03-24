// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import ReduxCountersManagerReducer from "../pages/ReduxCountersManager/reducers/reducers";
import todoReducer from "../pages/todoList/reducers/todoReducer";
import todoSlice from "../pages/ReduxToolkitTodo/redusers/rtkReducers";

// import rootReducer from "./rootReducer";

// const configureStore = () => {
//   return createStore(rootReducer());
// };

// export default configureStore;

export const store = configureStore({
  reducer: {
    ReduxCounters: ReduxCountersManagerReducer,
    ReduxTodo: todoReducer,
    RtkTodo: todoSlice,
  },
});
