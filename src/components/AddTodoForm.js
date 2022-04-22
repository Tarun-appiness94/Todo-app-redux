import React from "react";
import { useState } from "react";
import { addTodo, filterActiveTodo, filterAllTodo, filterCompletedTodo } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const AddTodoForm = () => {

	const todoItems = useSelector(state => state.todoReducer.data)
	const updateitem = useSelector(state => state.todoReducer.currentEditData);
	const dispatch = useDispatch();

	const [ todo, setTodo] = useState("");

	

	const arrayMessage = todoItems.map(todo => todo.message)
	



	function onSubmit(e){
		e.preventDefault();
						if(todo){
						(arrayMessage.includes(todo))? alert("Entered Note is already exist") : dispatch(addTodo(todo))
						setTodo("");
						}
						else{
						alert("Note feild cannot be blank, Please enter a note")
					}
				}

	return (<>
				<form onSubmit={e=>onSubmit(e)} className='form-inline mt-3 mb-3'>
					<label className='sr-only'>Add A Note</label>
					<input
						type='text'
						value={todo}
						onChange={e=>setTodo(e.target.value)}
						className='form-control mb-2 mr-sm-2'
						placeholder='Add Note...'
					/>
				
					<button type='submit' className='btn btn-primary mb-2'>Submit</button>
				
				</form>

				<div>
					<span>Show : </span>
					<button onClick={()=>dispatch(filterAllTodo())}>All</button> &nbsp;
					<button onClick={()=>dispatch(filterActiveTodo())}>Active</button> &nbsp;
					<button onClick={()=>dispatch(filterCompletedTodo())}>Completed</button>
				</div>
				</>
			);	
}


export default AddTodoForm;
