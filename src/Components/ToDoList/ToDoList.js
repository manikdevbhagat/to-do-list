import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoList({ toDoList, deleteTask, toggleTask }) {
  return (
    <div className="task-list">
      {toDoList.map((task) => {
        return (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        );
      })}
    </div>
  );
}

export default ToDoList;
