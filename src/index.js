import React from "react";
import ReactDOM from "react-dom";

//Component #1
function HelloWorld() {
	return <h1> Hello, World! </h1>; //JSX Element
}
ReactDOM.render(<HelloWorld />, document.getElementById("root"));