import useForm from "../../../../hooks/useForm";

const EditableTodoItem = ({
  id,
  taskNumber,
  taskText,
  handleTaskSave,
  handleTaskCancel,
}) => {
  const { form, handleChange } = useForm({ taskText });
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
      </form>
      <div>
        <button onClick={() => handleTaskSave({ id, newText: form.taskText })}>
          Save
        </button>
        <button onClick={() => handleTaskCancel(id)}> Cancel </button>
      </div>
    </div>
  );
};

export default EditableTodoItem;
