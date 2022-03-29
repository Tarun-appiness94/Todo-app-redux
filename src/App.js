import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoItem from './components/TodoItem';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoItem />
		</div>
	);
};

export default App;
