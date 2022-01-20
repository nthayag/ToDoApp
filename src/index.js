import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(){

	return (
		<div className="app">
			<header className="app-header">
				<h1>To Do List</h1>
				<p>A simple To Do List created with React.js</p>
			</header>
		</div>


	)

}

ReactDOM.render(<App />, document.getElementById("root"));