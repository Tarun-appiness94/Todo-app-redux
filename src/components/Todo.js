// import React from 'react';
// // import { connect } from "react-redux";
// import { deleteTodo, completedTodo} from '../actions';
// import { useSelector, useDispatch } from 'react-redux';


// const Todo = () => {

//     const todoitems = useSelector(state => state.todoReducer.data);

	
// 	const filterTag = useSelector(state => state.filterReducer)
// 	console.log(filterTag);
// 	const dispatch = useDispatch();


// return (
//     <div className="card text-start" key={index} style={{ width: "18rem",color: todo.completed ? "red" : ""}}>
//         <div className="card-body" >
//             <p className="card-title"># {index + 1}</p>
//             <h5 className="card-text">{todo.message}</h5>
//             <hr />
//             <button className='btn-sm btn-danger' onClick={() => dispatch(deleteTodo(todo.id))}>
//                 Delete
//             </button>
//             <button className='btn-sm btn-success' onClick={() => dispatch(completedTodo(todo.id))}>
//                 Edit
//             </button>
//         </div>
//     </div>
// )

// }
// export default Todo;
