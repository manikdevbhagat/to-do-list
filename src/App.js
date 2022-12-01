import { useState } from "react";
import React from "react";
import "./App.css";
import Heading from "./Components/Heading/Heading";
import InputForm from "./Components/Input/Input";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (data) => {
    const obj = { id: toDoList.length+1, task: data, done: false };
    const copy = [...toDoList];
    copy.push(obj);
    setToDoList(copy);
  };

  const deleteTask = (id) => {
    const copy = toDoList.filter((item) => item.id !== id);
    setToDoList(copy);
  };

  const toggleTask = (id) => {
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
