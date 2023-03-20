import useForm from "../../../../hooks/useForm";

const EditableTodoItem = ({
  id,
  taskNumber,
  taskText,
  taskDescription,
  handleTaskSave,
  handleTaskCancel,
}) => {
  const { form, handleChange } = useForm({ taskText, taskDescription });
  return (
    <div>
      <div>{taskNumber}</div>
      <form>
        <input
          type="text"
          name="taskText"
          value={form.taskText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="taskDescription"
          value={form.taskDescription}
          onChange={handleChange}
        ></input>
      </form>
      <div>
        <button
          onClick={() =>
            handleTaskSave({
              id,
              newText: form.taskText,
              newDescription: form.taskDescription,
            })
          }
        >
          Save
        </button>
        <button onClick={() => handleTaskCancel(id)}> Cancel </button>
      </div>
    </div>
  );
};

export default EditableTodoItem;
