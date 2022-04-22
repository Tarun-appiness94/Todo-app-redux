import React from 'react';
// import { connect } from "react-redux";
import { deleteTodo, completedTodo} from '../actions';
import { useSelector, useDispatch } from 'react-redux';
// import Todo from './Todo';


const TodoItem = () => {


	const todoitems = useSelector(state => state.todoReducer.data);

	
	const filterTag = useSelector(state => state.filterReducer)
	console.log(filterTag);
	const dispatch = useDispatch();



	



	return (
		<div className='ui container' style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
			{todoitems.map((todo, index) => {
				if(filterTag.active && !todo.completed){
					return (
						<div className="card text-start" key={index} style={{ width: "18rem", color: todo.completed ? "red" : ""}}>
							<div className="card-body" >
								<p className="card-title"># {index + 1}</p>
								<h5 className="card-text">{todo.message}</h5>
								<hr />
								<div style={{display: "flex", justifyContent : "space-around"}}>
										<button className='btn-sm btn-danger' onClick={() => dispatch(deleteTodo(todo.id))}>
											Delete
										</button>
										<button className='btn-sm btn-success' onClick={() => dispatch(completedTodo(todo.id))}>
											{todo.completed ? "Mark Active" : "Mark Completed"}
										</button>
										</div>
							</div>
						</div>
					)}

					else if(filterTag.completed && todo.completed){
						return (
							<div className="card text-start" key={index} style={{ width: "18rem",color: todo.completed ? "red" : ""}}>
								<div className="card-body" >
									<p className="card-title"># {index + 1}</p>
									<h5 className="card-text">{todo.message}</h5>
									<hr />
									<div style={{display: "flex", justifyContent : "space-around"}}>
										<button className='btn-sm btn-danger' onClick={() => dispatch(deleteTodo(todo.id))}>
											Delete
										</button>
										<button className='btn-sm btn-success' onClick={() => dispatch(completedTodo(todo.id))}>
											{todo.completed ? "Mark Active" : "Mark Completed"}
										</button>
										</div>
								</div>
							</div>
						)}
		
						else if(filterTag.all){
							return (
								<div className="card text-start" key={index} style={{ width: "18rem",color: todo.completed ? "red" : ""}}>
									<div className="card-body" >
										<p className="card-title"># {index + 1}</p>
										<h5 className="card-text">{todo.message}</h5>
										<hr />
										<div style={{display: "flex", justifyContent : "space-around"}}>
										<button className='btn-sm btn-danger' onClick={() => dispatch(deleteTodo(todo.id))}>
											Delete
										</button>
										<button className='btn-sm btn-success' onClick={() => dispatch(completedTodo(todo.id))}>
											{todo.completed ? "Mark Active" : "Mark Completed"}
										</button>
										</div>
									</div>
								</div>
							)}
							
							else{
								return "";
							}

			// todoitems.map((todo, index) => {
			// 	if(filterTag.active && !todo.completed){ <Todo/>}

			// 		else if(filterTag.completed && todo.completed){
			// 			return (
			// 				<div className="card text-start" key={index} style={{ width: "18rem",color: todo.completed ? "red" : ""}}>
			// 					<div className="card-body" >
			// 						<p className="card-title"># {index + 1}</p>
			// 						<h5 className="card-text">{todo.message}</h5>
			// 						<hr />
			// 						<button className='btn-sm btn-danger' onClick={() => dispatch(deleteTodo(todo.id))}>
			// 							Delete
			// 						</button>
			// 						<button className='btn-sm btn-success' onClick={() => dispatch(completedTodo(todo.id))}>
			// 							Mark Active
			// 						</button>
			// 					</div>
			// 				</div>
			// 			)}
		
			// 			else if(filterTag.all){
			// 				return (
			// 					<div className="card text-start" key={index} style={{ width: "18rem",color: todo.completed ? "red" : ""}}>
			// 						<div className="card-body" >
			// 							<p className="card-title"># {index + 1}</p>
			// 							<h5 className="card-text">{todo.message}</h5>
			// 							<hr />
			// 							<div style={{display: "flex", justifyContent : "space-around"}}>
			// 							<button className='btn-sm btn-danger' onClick={() => dispatch(deleteTodo(todo.id))}>
			// 								Delete
			// 							</button>
			// 							<button className='btn-sm btn-success' onClick={() => dispatch(completedTodo(todo.id))}>
			// 								{todo.completed ? "Mark Active" : "Mark Completed"}
			// 							</button>
			// 							</div>
			// 						</div>
			// 					</div>
			// 				)}
							
			// 				else{
			// 					return "";
			// 				}







		





			})}
		</div>
	);
};


export default TodoItem;

