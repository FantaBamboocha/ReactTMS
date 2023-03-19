import { createSelector } from "reselect";

export const todoSelector = (state) => state.ReduxTodo.todos;

export const sortedtodoSelector = createSelector(todoSelector, (todos) => {
  const todosCopy = structuredClone(todos);

  return todosCopy.sort(
    (current, next) => current.isCompleted - next.isCompleted
  );
});
