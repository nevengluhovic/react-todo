import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
