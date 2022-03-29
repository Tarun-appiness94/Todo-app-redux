import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodoForm = (props) => {


	return (
	<form onSubmit={(event)=>{
						event.preventDefault();
						let input = event.target.userInput.value;
						// console.log(input);
						props.dispatch(addTodo(input));
					}} className='form-inline mt-3 mb-3'>

					<label className='sr-only'>Add A Note</label>
					<input
						name='userInput'
						type='text'
						className='form-control mb-2 mr-sm-2'
						placeholder='Add Note...'
					/>
					<button type='submit' className='btn btn-primary mb-2'>Submit</button>
				</form>
			);	
}

export default connect()(AddTodoForm);
