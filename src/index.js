import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Task(props){

	return(
		<li className="tasks-item">{props.taskName}</li>
	);
}

function TasksList(){

	return (
		<ul>
			<Task taskName = "Follow Edukasyon.ph on Facebook"/>
			<Task taskName = "Follow AWS Siklab Pilipinas on Facebook"/>
			<Task taskName = "Follow Zuitt Coding Bootcamp on Facebook"/>	
		</ul>
	);
}

function App(){

	const paraStyle = {
		"margin-bottom": "80px"
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