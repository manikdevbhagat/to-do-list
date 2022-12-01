import { useState } from "react";
import "./App.css";
import Heading from "./Components/Heading/Heading";
import InputForm from "./Components/Input/Input";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);

  addTask = (data) => {
    const copy = toDoList.push({
      id: toDoList.length + 1,
      task: data,
      done: false,
    });
    setToDoList(copy);
  };

  deleteTask = (id) => {
    const copy = toDoList.filter((item) => item.id !== id);
    setToDoList(copy);
  };

  toggleTask = (id) => {
    const mapped = toDoList.map((task) =>
      task.id === Number(id) ? { ...task, done: !task.done } : task
    );
    setToDoList(mapped);
  };
  return (
    <div className="container">
      <Heading />
      <InputForm addTask={addTask} />
      <ToDoList
        toDoList={toDoList}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
