import { Route, Routes } from "react-router-dom";

import CounterContainer from "../pages/counter/containers/CounterContainer";
import CounterListContainer from "../pages/counterList/containers/CounterListContainer";
import ReduxCountersManagerContainer from "../pages/ReduxCountersManager/containers/ReduxCountersManagerContainer";
import FormContainer from "../pages/Forms/containers/FormContainer";
import TodoListContainer from "../pages/todoList/containers/TodoListContainer";
import { ROUTE_NAMES } from "./routeNames";
import RtkTodoContainer from "../pages/ReduxToolkitTodo/containers/RtkTodoContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route
        path={ROUTE_NAMES.COUNTER_LIST}
        element={<CounterListContainer />}
      />
      <Route
        path={ROUTE_NAMES.REDUX_COUNTER_LIST}
        element={<ReduxCountersManagerContainer />}
      />
      <Route path={ROUTE_NAMES.FORM} element={<FormContainer />}></Route>
      <Route
        path={ROUTE_NAMES.REDUX_TODO_LIST}
        element={<TodoListContainer />}
      ></Route>
      <Route
        path={ROUTE_NAMES.RTK_TODO_LIST}
        element={<RtkTodoContainer />}
      ></Route>
    </Routes>
  );
};

export default Router;
