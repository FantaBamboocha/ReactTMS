import { createSelector } from "@reduxjs/toolkit";

const rtkTodoSelector = (store) => store.RtkTodo;

export const sortedRtkTodoList = createSelector(rtkTodoSelector, (RtkTodo) => {
  const copyTodo = structuredClone(RtkTodo.rtkTodos);

  return copyTodo.sort(
    (current, next) => current.isCompleted - next.isCompleted
  );
});
