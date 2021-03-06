import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  //Getting the input value
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText.length === 0) {
      alert("You can not add empty Todo!");
    } else {
      setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
      setInputText("");
    }
  };

  const selectHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitTodoHandler}>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={selectHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
