import React from 'react';
import {connect} from "react-redux";
import { deleteTodo } from '../actions';

const TodoItem = (props) => {

return (
<div className='ui container' style={{display: "flex", flexWrap: "wrap", gap:"10px"}}>
{props.todoitems.map((todo, index) => {
return(
<div className="card text-start" key={index} style={{width: "18rem"}}>
  <div className="card-body" >
    <p className="card-title"># {index+1}</p>
    <h5 className="card-text">{todo.message}</h5>
	<hr/>
    <button className='btn-sm btn-danger' onClick={()=>props.dispatch(deleteTodo(todo.id))}>
		Delete
	</button>
  </div>
  </div>
)})}
</div>
);
};

const mapStateToProps = state => {
	// console.log(state.todoReducer.data);
	return{
		todoitems : state.todoReducer.data
	}
}


export default connect(mapStateToProps)(TodoItem);

