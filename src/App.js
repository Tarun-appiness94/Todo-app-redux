import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';

const App = () => {
	return (
		<div>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
		</div>
	);
};

export default App;
