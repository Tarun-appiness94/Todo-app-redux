import React from 'react';
// import { connect } from "react-redux";
import { deleteTodo, completedTodo } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../Todo/Todo';

const TodoItem = () => {


	const todoitems = useSelector(state => state.todoReducer.data);


	const filterTag = useSelector(state => state.filterReducer)
	console.log(filterTag);
	const dispatch = useDispatch();







	return (
		<div className='ui container' style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
			{todoitems.map((todo, index) => {
				if (filterTag.active && !todo.completed) {
					return <Todo todo={todo} index={index} />
				} else if (filterTag.completed && todo.completed) {
					return <Todo todo={todo} index={index} />
				} else if (filterTag.all) {
					return <Todo todo={todo} index={index} />
				} else {
					return "";
				}
			})
		}
		</div>
	);
};


export default TodoItem;

