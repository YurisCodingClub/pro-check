/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { githubTasks } from '../utils/data';

const GitHubTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    const githubTasksStored = JSON.parse(
      localStorage.getItem('githubTasksStored')
    );

    if (githubTasksStored === null || githubTasksStored.length === 0) {
      localStorage.setItem('githubTasksStored', JSON.stringify(githubTasks));
    } else {
      setTasks(githubTasksStored);
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
    localStorage.setItem('githubTasksStored', JSON.stringify(listTasks));
  };

  return (
    <div className="container">
      <h2>GitHub Repositories</h2>
      <hr />
      <ul>
        {tasks.map((task) => (
          <li
            className="item"
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

export default GitHubTasks;
