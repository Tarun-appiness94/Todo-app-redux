import React from 'react';
// import { connect } from "react-redux";
import { deleteTodo, completedTodo } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../Todo/Todo';

const TodoItem = () => {


	const todoitems = useSelector(state => state.todoReducer.data);


	const filterTag = useSelector(state => state.filterReducer)
	const dispatch = useDispatch();





	// (filterTag.active && !todo.completed) ? <Todo todo={todo} index={index} /> : <p>nottt</p>
	return((todoitems.length !== 0) ? 

	 (<div className='ui container' style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
			{ todoitems.map((todo, index) => {
				if (filterTag.active && !todo.completed) {
					return <Todo key={index} todo={todo} index={index} />
				} else if (filterTag.completed && todo.completed) {
					return <Todo key={index} todo={todo} index={index} />
				} else if (filterTag.all) {
					return <Todo key={index} todo={todo} index={index} />
				} else {
					return " ";
				}
			})
		}
		</div>) : 
		(<div className='ui container'style={{ display: "flex", justifyContent:"center"}}>
			<b>There is not any Todo, Please enter...</b>
		</div>)
	)	



};


export default TodoItem;

