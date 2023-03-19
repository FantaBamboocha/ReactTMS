import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions/todoActions";

const initialState = { todos: [] };

const todoReducer = handleActions(
  {
    [actions.createTodo]: (state, { payload: taskData }) => {
      const stateCopy = structuredClone(state);

      const newTask = {
        id: uuid(),
        text: taskData.taskText,
        isCompleted: false,
        isEditable: false,
      };

      stateCopy.todos.unshift(newTask);

      return stateCopy;
    },

    [actions.removeTodo]: (state, { payload: id }) => {
      const stateCopy = structuredClone(state);

      const indexToDelete = stateCopy.todos.findIndex((todo) => todo.id === id);

      stateCopy.todos.splice(indexToDelete, 1);

      return stateCopy;
    },

    [actions.completeTodo]: (state, { payload: id }) => {
      const stateCopy = structuredClone(state);

      const foundTodo = stateCopy.todos.find((todo) => todo.id === id);

      foundTodo.isCompleted = true;

      return stateCopy;
    },

    [actions.editTodo]: (state, { payload: id }) => {
      const stateCopy = structuredClone(state);

      const foundTodo = stateCopy.todos.find((todo) => todo.id === id);

      foundTodo.isEditable = true;

      return stateCopy;
    },

    [actions.undoEditing]: (state, { payload: id }) => {
      const stateCopy = structuredClone(state);

      const foundTodo = stateCopy.todos.find((todo) => todo.id === id);

      foundTodo.isEditable = false;

      return stateCopy;
    },

    [actions.saveEditing]: (state, { payload: updatedtaskData }) => {
      const { id, newText } = updatedtaskData;
      const stateCopy = structuredClone(state);

      const foundTodo = stateCopy.todos.find((todo) => todo.id === id);

      foundTodo.text = newText;
      foundTodo.isEditable = false;

      return stateCopy;
    },
  },
  initialState
);

export default todoReducer;
