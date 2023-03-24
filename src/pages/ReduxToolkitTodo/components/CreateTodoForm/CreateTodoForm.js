import CustomButton from "../../../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const CreateTodoForm = ({
  taskText,
  taskDescription,
  handleSubmit,
  handleTaskChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        label="Task"
        type="text"
        name="taskText"
        value={taskText}
        onChange={handleTaskChange}
      />
      <CustomInput
        label="Description"
        type="text"
        name="taskDescription"
        value={taskDescription}
        onChange={handleTaskChange}
      />

      <CustomButton
        text="Create"
        type="submit"
        variant="contained"
        color="success"
        onClick={handleSubmit}
        size="medium"
      />
    </form>
  );
};

export default CreateTodoForm;
