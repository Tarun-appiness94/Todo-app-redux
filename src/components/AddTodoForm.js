import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodoForm = (props) => {
	const [ message, setMessage] = useState("");
	const arrayMessage = props.todoitems.map(todo => todo.message)
	// console.log(arrayMessage);

	function onSubmit(e){
		e.preventDefault();
						if (message){
						(arrayMessage.includes(message))? alert("Entered Note is already exist") : props.dispatch(addTodo(message))
						setMessage("");
					}else{
						alert("Note feild cannot be blank, Please enter a note")
					}
				}

	return (
				<form onSubmit={e=>onSubmit(e)} className='form-inline mt-3 mb-3'>
					<label className='sr-only'>Add A Note</label>
					<input
						type='text'
						value={message}
						onChange={e=>setMessage(e.target.value)}
						className='form-control mb-2 mr-sm-2'
						placeholder='Add Note...'
					/>
					<button type='submit' className='btn btn-primary mb-2'>Submit</button>
				</form>
			);	
}

const mapStateToProps= state => {
return{
	todoitems: state.todoReducer.data
}
}

export default connect(mapStateToProps)(AddTodoForm);
