import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TasksList from "./components/TasksList";

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