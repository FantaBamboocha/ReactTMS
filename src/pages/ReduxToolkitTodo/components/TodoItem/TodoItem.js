import CustomButton from "../../../../components/CustomButton/CustomButton";

import styles from "./styles.module.scss";

const TodoItem = ({
  id,
  taskNumber,
  taskText,
  taskDescription,
  isCompleted,
  handleTaskEdit,
  handleTaskComplete,
  handleTaskDelete,
}) => {
  return (
    <div>
      <div>{taskNumber}</div>
      <div className={isCompleted ? styles.completed : ""}>{taskText}</div>
      <div className={isCompleted ? styles.completed : ""}>
        {taskDescription}
      </div>

      <div>
        <CustomButton
          text="Edit"
          disabled={isCompleted}
          onClick={() => handleTaskEdit(id)}
          color="info"
        />
        <CustomButton
          text="Complete"
          disabled={isCompleted}
          onClick={() => handleTaskComplete(id)}
          color="success"
        />
        <CustomButton
          text="Delete"
          onClick={() => handleTaskDelete(id)}
          color="error"
        />
      </div>
    </div>
  );
};

export default TodoItem;
