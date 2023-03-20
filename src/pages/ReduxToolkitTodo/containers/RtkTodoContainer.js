import { useDispatch, useSelector } from "react-redux";

import useForm from "../../../hooks/useForm";
import RtkLayout from "../components/Layout/RtkLayout";
import {
  createTodo,
  removeTodo,
  completeTodo,
  editTodo,
  undoEditing,
  saveEditing,
} from "../redusers/rtkReducers";
import { sortedRtkTodoList } from "../selectors";

const RtkTodoContainer = () => {
  const dispatch = useDispatch();

  const todos = useSelector(sortedRtkTodoList);

  const { form, handleChange, handleReset } = useForm({
    taskText: "",
    taskDescription: "",
  });

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

  const handleTaskSave = (newTask) => {
    dispatch(saveEditing(newTask));
  };
  return (
    <>
      <h2>RTK</h2>
      <RtkLayout
        todos={todos}
        taskText={form.taskText}
        taskDescription={form.taskDescription}
        handleSubmit={handleSubmit}
        handleTaskChange={handleChange}
        handleTaskDelete={handleTaskDelete}
        handleTaskComplete={handleTaskComplete}
        handleTaskEdit={handleTaskEdit}
        handleTaskCancel={handleTaskCancel}
        handleTaskSave={handleTaskSave}
      />
    </>
  );
};

export default RtkTodoContainer;
