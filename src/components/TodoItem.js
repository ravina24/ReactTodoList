import React from "react";

const TodoItem = (props) => {
	return (
			<div className="todo-item">
				<input type="checkbox" id={props.item.id} checked={props.item.completed} /> 
			    <label for="checkbox">{props.item.text}</label>
			    <br />
			</div>
		)
}

export default TodoItem;