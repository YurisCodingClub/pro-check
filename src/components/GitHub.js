import { githubRepoTasks as tasks } from "../assets/constants";
import { useState, useEffect } from "react";

const GitHub = () => {
    const [taskNames, setTaskNames] = useState(
        JSON.parse(localStorage.getItem("githubTasksStored"))
    );

    useEffect(() => {
        localStorage.setItem("githubTasksStored", JSON.stringify(tasks));
    }, [taskNames]);

    const handleCheck = (id) => {
        const listItems = tasks.map((task) =>
            task.id === id ? { ...task, checked: !task.checked } : task
        );
        setTaskNames(listItems);
    };

    return (
        <div>
            <h2>GitHub Repositories</h2>

            <ul>
                {tasks.map((task) => (
                    <li className="task">
                        <input
                            onChange={() => handleCheck(task.id)}
                            type="checkbox"
                            checked={task.checked}
                        />
                        <label type="checkbox" checked={task.checked}>
                            {task.task}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHub;
