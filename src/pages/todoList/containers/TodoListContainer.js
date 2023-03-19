import { useDispatch, useSelector } from "react-redux";

import useForm from "../../../hooks/useForm";

import {
  createTodo,
  removeTodo,
  completeTodo,
  editTodo,
  undoEditing,
  saveEditing,
} from "../actions/todoActions";
import { sortedtodoSelector } from "../selectors/todoSelectors";
import TodoLayout from "../components/Layout/TodoLayout";

const TodoListContainer = () => {
  const dispatch = useDispatch();

  const todos = useSelector(sortedtodoSelector);

  const { form, handleChange, handleReset } = useForm({ taskText: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createTodo(form));
    handleReset();
  };

  const handleTaskDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleTaskComplete = (id) => {
    dispatch(completeTodo(id));
  };

  const handleTaskEdit = (id) => {
    dispatch(editTodo(id));
  };

  const handleTaskCancel = (id) => {
    dispatch(undoEditing(id));
  };

  const handleTaskSave = (taskData) => {
    dispatch(saveEditing(taskData));
  };

  return (
    <TodoLayout
      todos={todos}
      taskText={form.taskText}
      handleTaskChange={handleChange}
      handleSubmit={handleSubmit}
      handleTaskDelete={handleTaskDelete}
      handleTaskComplete={handleTaskComplete}
      handleTaskEdit={handleTaskEdit}
      handleTaskCancel={handleTaskCancel}
      handleTaskSave={handleTaskSave}
    />
  );
};

export default TodoListContainer;
