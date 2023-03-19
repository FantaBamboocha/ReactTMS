import { combineReducers } from "redux";

import ReduxCountersManagerReducer from "../pages/ReduxCountersManager/reducers/reducers";
import todoReducer from "../pages/todoList/reducers/todoReducer";

const rootReducer = () => {
  return combineReducers({
    ReduxCounters: ReduxCountersManagerReducer,
    ReduxTodo: todoReducer,
  });
};

export default rootReducer;
