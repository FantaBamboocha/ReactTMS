import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  rtkTodos: [],
};

const todoSlice = createSlice({
  name: "rtkTodo",
  initialState,
  reducers: {
    createTodo: (state, { payload: taskData }) => {
      const newTask = {
        id: uuid(),
        text: taskData.taskText,
        description: taskData.taskDescription,
        isCompleted: false,
        isEditable: false,
      };

      state.rtkTodos.unshift(newTask);
    },

    removeTodo: (state, { payload: id }) => {
      const indexToDelete = state.rtkTodos.findIndex((todo) => todo.id === id);

      state.rtkTodos.splice(indexToDelete, 1);
    },

    completeTodo: (state, { payload: id }) => {
      const foundTodo = state.rtkTodos.find((todo) => todo.id === id);

      foundTodo.isCompleted = true;
    },

    editTodo: (state, { payload: id }) => {
      const foundTodo = state.rtkTodos.find((todo) => todo.id === id);

      foundTodo.isEditable = true;
    },

    undoEditing: (state, { payload: id }) => {
      const foundTodo = state.rtkTodos.find((todo) => todo.id === id);

      foundTodo.isEditable = false;
    },

    saveEditing: (state, { payload: newTask }) => {
      const { id, newText, newDescription } = newTask;
      const foundTodo = state.rtkTodos.find((todo) => todo.id === id);

      foundTodo.text = newText;
      foundTodo.description = newDescription;
      foundTodo.isEditable = false;
    },
  },
});

export const {
  createTodo,
  removeTodo,
  completeTodo,
  editTodo,
  undoEditing,
  saveEditing,
} = todoSlice.actions;

export default todoSlice.reducer;
