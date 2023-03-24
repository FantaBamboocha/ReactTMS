import useForm from "../../../../hooks/useForm";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../../../../components/CustomButton/CustomButton";

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
        <CustomInput
          type="text"
          name="taskText"
          value={form.taskText}
          onChange={handleChange}
        />

        <CustomInput
          type="text"
          name="taskDescription"
          value={form.taskDescription}
          onChange={handleChange}
        />
      </form>
      <div>
        <CustomButton
          text="Save"
          onClick={() =>
            handleTaskSave({
              id,
              newText: form.taskText,
              newDescription: form.taskDescription,
            })
          }
        />

        <CustomButton text="Cancel" onClick={() => handleTaskCancel(id)} />
      </div>
    </div>
  );
};

export default EditableTodoItem;
