import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(){

	const paraStyle = {
		"margin-bottom": "15px"
	};

	return (
		<div className="app">
			<header className="app-header">
				<h1>To Do List</h1>
				<p style = {paraStyle}>a simple to do list created with react.js</p>
				<ul>
					<li className="tasks-item">Follow Edukasyon.ph on Facebook</li>
					<li className="tasks-item">Follow AWS Siklab on Facebook</li>
					<li className="tasks-item">Follow Zuitt Coding Bootcamp on Facebook</li>
				</ul>
			</header>
		</div>
	)

}

ReactDOM.render(<App />, document.getElementById("root"));