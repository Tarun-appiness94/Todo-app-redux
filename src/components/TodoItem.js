import React from 'react';
import {connect} from "react-redux";
import { deleteTodo } from '../actions';

const TodoItem = (props) => {


	return (
	<table className='table'>

<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Note</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

{props.todoitems.map((todo, index) => {
// console.log(todo);
return(
  <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{todo.message}</td>
      <td>
	  	<button className='btn btn-danger float-right' onClick={()=>props.dispatch(deleteTodo(todo.id))}>
			Delete
		</button>
	  </td>
    </tr>
)})}

  </tbody>

		{/* <ul className='list-group'>
		
			{props.todoitems.map((todo, index) => {
			// console.log(todo);
			return(
			<li className="list-group-item" key={index}>
			<div className=''>{index+1}</div>
			<div className=''>{todo.message}</div>
			<button className='btn btn-danger' onClick={()=>props.dispatch(deleteTodo(todo.id))}>
			Delete
			</button>
			</li>
			)})}
		</ul> */}
	</table>
	);
};

const mapStateToProps = state => {
	// console.log(state.todoReducer.data);
	return{
		todoitems : state.todoReducer.data
	}
}


export default connect(mapStateToProps)(TodoItem);



{/* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}