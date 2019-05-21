import React from "react";
import TodoItem from "./components/TodoItem.js";
import todosData from "./components/todosData.js";

function App() {

  const todoList = todosData.map(item => <TodoItem key={item.id} item={item} />);

  return (
      <div className="todoList">
        {todoList}
      </div>
    );
}

export default App;
