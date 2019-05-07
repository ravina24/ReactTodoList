import React from "react";
import TodoItem from "./components/TodoItem.js";

function App() {
  return (
      // render 4 checkboxes here
      <div className="todoList">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    );
}

export default App;
