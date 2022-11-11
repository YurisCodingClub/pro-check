import { useEffect, useState } from 'react';
import { codeTasks } from '../utils/data';

const CodeTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    const codeTasksStored = JSON.parse(localStorage.getItem('codeTasksStored'));

    if (codeTasksStored === null || codeTasksStored.length === 0) {
      localStorage.setItem('codeTasksStored', JSON.stringify(codeTasks));
    } else {
      setTasks(codeTasksStored);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCheck = (id) => {
    const listTasks = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(listTasks);
    localStorage.setItem('codeTasksStored', JSON.stringify(listTasks));
  };

  return (
    <div className="container">
      <h2>Code and Live View</h2>
      <hr />
      <ul>
        {tasks.map((task) => (
          <li
            className="task"
            key={task.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheck(task.id)}
                checked={task.checked}
              />
              {task.task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CodeTasks;
