import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import MdAddCircle from "react-icons/md/MdAddCircle";

function InputForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  handleChange = (event) => {
    setUserInput(event.target.value);
  };

  handleSubmit = () => {
    if (!userInput) return;
    addTask(userInput);
    setUserInput("");
  };
  return (
    <div className="input-field">
      <input
        id="newTask"
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task"
      />
      <MdAddCircle className="add-task" onClick={handleSubmit} />
    </div>
  );
}

export default InputForm;
