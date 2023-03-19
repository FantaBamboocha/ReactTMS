const CreateTodoForm = ({ taskText, handleSubmit, handleTaskChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="taskText"
        value={taskText}
        onChange={handleTaskChange}
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTodoForm;
