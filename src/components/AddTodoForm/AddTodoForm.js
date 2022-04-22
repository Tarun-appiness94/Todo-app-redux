import React from "react";
import { useState } from "react";
import { addTodo, filterActiveTodo, filterAllTodo, filterCompletedTodo } from "../../actions"
import { useSelector, useDispatch } from "react-redux";

const AddTodoForm = () => {

	const [todo, setTodo] = useState("");

	const todoItems = useSelector(state => state.todoReducer.data)
	const arrayMessage = todoItems.map(todo => todo.message)
	const filterTag = useSelector(state => state.filterReducer)
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		if (todo) {
			(arrayMessage.includes(todo)) ? alert("Entered Note is already exist") : dispatch(addTodo(todo))
			setTodo("");
		}else {
			alert("Note feild cannot be blank, Please enter a note")
		}
	}

	return (<div className="container">
		<form onSubmit={e => onSubmit(e)} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Add A Note</label>
			<input
				type='text'
				value={todo}
				onChange={e => setTodo(e.target.value)}
				className='form-control mb-2 mr-sm-2'
				placeholder='Add Note...'
			/>
			<button type='submit' className="btn btn-sm btn-success">Submit</button>
			<div style={{ display: "inline-block", marginLeft: "50px", alignItems: "center" }}>
				<span>Show : </span>
				<button type="button" className={filterTag.all ? "btn-sm btn-secondary" : "btn-sm btn-primary"} onClick={() => dispatch(filterAllTodo())}>All</button> &nbsp;
				<button type="button" className={filterTag.active ? "btn-sm btn-secondary" : "btn-sm btn-primary"} onClick={() => dispatch(filterActiveTodo())}>Active</button> &nbsp;
				<button type="button" className={filterTag.completed ? "btn-sm btn-secondary" : "btn-sm btn-primary"} onClick={() => dispatch(filterCompletedTodo())}>Completed</button>
			</div>

		</form>



	</div>
	);
}


export default AddTodoForm;
