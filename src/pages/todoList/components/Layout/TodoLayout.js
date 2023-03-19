import CreateTodoForm from "../CreateTodoForm/CreateTodoForm";
import EditableTodoItem from "../EditableTodoItem/EditableTodoItem";
import TodoItem from "../TodoItem/TodoItem";

const TodoLayout = ({
  todos,
  taskText,
  handleTaskChange,
  handleSubmit,
  handleTaskEdit,
  handleTaskComplete,
  handleTaskDelete,
  handleTaskSave,
  handleTaskCancel,
}) => {
  console.log(taskText);
  return (
    <div>
      <CreateTodoForm
        taskText={taskText}
        handleTaskChange={handleTaskChange}
        handleSubmit={handleSubmit}
      />
      <div>
        {todos.map(({ id, text, isCompleted, isEditable }, index) => {
          const taskNumber = index + 1;
          return isEditable ? (
            <EditableTodoItem
              key={id}
              id={id}
              taskNumber={taskNumber}
              taskText={text}
              handleTaskSave={handleTaskSave}
              handleTaskCancel={handleTaskCancel}
            />
          ) : (
            <TodoItem
              key={id}
              id={id}
              taskNumber={taskNumber}
              taskText={text}
              isCompleted={isCompleted}
              isEditable={isEditable}
              handleTaskChange={handleTaskChange}
              handleTaskEdit={handleTaskEdit}
              handleTaskComplete={handleTaskComplete}
              handleTaskDelete={handleTaskDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoLayout;
