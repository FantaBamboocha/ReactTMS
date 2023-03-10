import { Route, Routes } from "react-router-dom";

import CounterContainer from "../pages/counter/containers/CounterContainer";
import { ROUTE_NAMES } from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>ty6uk7u6rty</h1>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
    </Routes>
  );
};

export default Router;
