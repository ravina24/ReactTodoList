import React from "react";
import TodoItem from "./components/TodoItem.js";
import todosData from "./components/todosData.js";


class App extends React.Component {

	constructor() {
		super();
		this.state = {
			data: todosData
		}
	}

	render() {
		const todoList = this.state.data.map(item => <TodoItem key={item.id} item={item} />);

		 return (
		     <div className="todoList">
		       {todoList}
		     </div>
		);
	}
}

export default App;
