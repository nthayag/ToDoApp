import { useState } from "react";
import Task from "./Task";

function TasksList(){

    const [taskItemsList, setTaskItemsList] = useState([
        "Follow Edukasyon.ph on Facebook",
		"Follow AWS Siklab Pilipinas on Facebook",
		"Follow Zuitt Coding Bootcamp on Facebook",
		"Follow nthayag_ on Instagram",
		"Follow Gunita Cavite on Facebook"
    ]);

    const [taskValue, setTaskValue] = useState("");
   
    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value)
    };

    const addTaskHandler = (e) => {
        setTaskItemsList([e.target.value, ...taskItemsList]);
        setTaskValue("");
    };

    return (
		<div>
			<p>Input new task here</p>
			<input 
            className="task-input" 
            placeholder = "What will you do today?"
            onChange={inputChangeHandler}
            onBlur = {addTaskHandler}
            value = {taskValue}
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