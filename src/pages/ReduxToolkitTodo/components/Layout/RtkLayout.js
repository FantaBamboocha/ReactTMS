import CreateTodoForm from "../CreateTodoForm/CreateTodoForm";
import EditableTodoItem from "../EditableTodoItem/EditableTodoItem";
import TodoItem from "../TodoItem/TodoItem";
import CustomAccordion from "../CustomAccordion/CustomAccordion";

const TodoLayout = ({
  todos,
  taskText,
  taskDescription,
  handleTaskChange,
  handleSubmit,
  handleTaskEdit,
  handleTaskComplete,
  handleTaskDelete,
  handleTaskSave,
  handleTaskCancel,
}) => {
  return (
    <div>
      <CreateTodoForm
        taskText={taskText}
        taskDescription={taskDescription}
        handleTaskChange={handleTaskChange}
        handleSubmit={handleSubmit}
      />
      <div>
        {todos.map(
          ({ id, text, description, isCompleted, isEditable }, index) => {
            const taskNumber = index + 1;
            return isEditable ? (
              <EditableTodoItem
                key={id}
                id={id}
                taskNumber={taskNumber}
                taskText={text}
                taskDescription={description}
                handleTaskSave={handleTaskSave}
                handleTaskCancel={handleTaskCancel}
              />
            ) : (
              <TodoItem
                key={id}
                id={id}
                taskNumber={taskNumber}
                taskText={text}
                taskDescription={description}
                isCompleted={isCompleted}
                isEditable={isEditable}
                handleTaskChange={handleTaskChange}
                handleTaskEdit={handleTaskEdit}
                handleTaskComplete={handleTaskComplete}
                handleTaskDelete={handleTaskDelete}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default TodoLayout;
