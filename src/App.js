import React from "react";
import TodoItem from "./components/TodoItem.js";
import todosData from "./components/todosData.js";


class App extends React.Component {

	constructor() {
		super();
		this.state = {
			data: todosData
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {
		this.setState(prevState => {
			const newTodoList = prevState.data.map(item => {
				if(item.id === id) {
				    item.completed = !item.completed
				}
				
				return item
			})
			

			return {
				data: newTodoList
			}
		})
	}

	render() {
		const todoList = this.state.data.map(item => <TodoItem key={item.id} item={item} changeHandler={this.handleChange} />);

		 return (
		     <div className="todoList">
		       {todoList}
		     </div>
		);
	}
}

export default App;
