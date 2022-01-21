import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Task(props){

	return(
		<li className="tasks-item">{props.taskName}</li>
	);
}

function TasksList(){

	const taskItemsList = [
		"Follow Edukasyon.ph on Facebook",
		"Follow AWS Siklab Pilipinas on Facebook",
		"Follow Zuitt Coding Bootcamp on Facebook",
		"Follow nthayag_ on Instagram",
		"Follow Gunita Cavite on Facebook"
	];

	return (
		<div>
			<p>Input new task here</p>
			<input className="task-input" />
			<ul>
				{taskItemsList.map((task, index) => {
					return <Task key = {index} taskName = {task} />;
					
				})}
			</ul>
		</div>
	);
}

function App(){

	const paraStyle = {
		"marginBottom": "80px"
	};

	return (
		<div className="app">
			<header className="app-header">
				<h1>To Do App</h1>
				<p style = {paraStyle}>a simple to do list created with react.js</p>
				<TasksList />
			</header>
		</div>
	);

}

ReactDOM.render(<App />, document.getElementById("root"));