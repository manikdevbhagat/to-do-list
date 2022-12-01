import { MdDelete } from "react-icons/md";

function ToDoItem({ task, deleteTask, toggleTask }) {
  handleDelete = (event) => {
    event.preventDefault();
    deleteTask(task.id);
  };
  handleToggle = () => {
    toggleTask(task.id);
  };
  return (
    <div className="task-list-item">
      <input type="checkbox" onClick={handleToggle} />
      <span className={"done-" + task.done}>{task.task}</span>
      <MdDelete className="delete-task" onClick={handleDelete} />
    </div>
  );
}

export default ToDoItem;
