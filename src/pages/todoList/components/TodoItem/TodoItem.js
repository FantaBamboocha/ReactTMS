import styles from "./styles.module.scss";

const TodoItem = ({
  id,
  taskNumber,
  taskText,
  isCompleted,
  handleTaskEdit,
  handleTaskComplete,
  handleTaskDelete,
}) => {
  return (
    <div>
      <div>{taskNumber}</div>
      <div className={isCompleted ? styles.completed : ""}>{taskText}</div>
      <div>
        <button disabled={isCompleted} onClick={() => handleTaskEdit(id)}>
          Edit
        </button>
        <button disabled={isCompleted} onClick={() => handleTaskComplete(id)}>
          Complete
        </button>
        <button onClick={() => handleTaskDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
