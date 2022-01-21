import { useState } from "react";
import Task from "./Task";

function TasksList(){

	const taskItemsList = [
		"Follow Edukasyon.ph on Facebook",
		"Follow AWS Siklab Pilipinas on Facebook",
		"Follow Zuitt Coding Bootcamp on Facebook",
		"Follow nthayag_ on Instagram",
		"Follow Gunita Cavite on Facebook"
	];

    const [taskValue, setTaskValue] = useState("Just another task");
   
    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value)
    };

    return (
		<div>
			<p>Input new task here</p>
			<input 
            className="task-input" 
            placeholder = "What will you do today?"
            onChange={inputChangeHandler}
            />
			<ul>
				{taskItemsList.map((task, index) => {
					return <Task key = {index} taskName = {task} />;
					
				})}
			</ul>
		</div>
	);
}

export default TasksList; 