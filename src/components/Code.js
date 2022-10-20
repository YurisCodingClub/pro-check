import { Fragment, useEffect, useState } from "react";

const Code = () => {
  const [check, setCheck] = useState(false);
  const[task, setTask] = useState({});
  const [checkList, setCheckList] = useState([]);


  //Function to check if localStorage has checklist data
  const fetchList = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (savedTasks === null || savedTasks.length === 0) {
      localStorage.setItem('tasks', JSON.stringify([{done: check, item: 'Create React App'}]));
    }

    else {
      setCheckList(savedTasks);
    }
  }


  //Fetching checklist on first load
  useEffect(() => {
    fetchList();
  }, []);

  //Function to add new tasks to checkList
  function addNewTask() {
    localStorage.setItem('tasks', JSON.stringify([...checkList, task]));
    fetchList();
  }

  //Function to check/uncheck items 
  function checkItem(task) {
    if (task.done === true) {
      setCheck(task.done = false)
      const changedTask = checkList.find(obj => obj.item === task.item);
      Object.assign(changedTask, task);
      localStorage.setItem('tasks', JSON.stringify(checkList));
    }

    else {
      setCheck(task.done = true)
      const changedTask = checkList.find(obj => obj.item === task.item);
      Object.assign(changedTask, task);
      localStorage.setItem('tasks', JSON.stringify(checkList))
    }
  }


  return (  
    <Fragment>
      <h1 style={{'textAlign': 'center'}}> 
        Code and Live View
      </h1>

      <form action="">
        <input 
          type="text" 
          placeholder="Insert Task..." 
          style={{'marginRight': '10px'}} 
          onChange={(e) => setTask({done: check, item: e.target.value})}
        />
        <input type="button" value="Add New Task" onClick={addNewTask} />
      </form>

      <div style={{'marginTop': '20px'}}>
        {checkList.map((task, index) => (
          <label 
            key={index} 
            style={{'display': 'block'}}
            onClick={() => {checkItem(task)}}
          >
            <input 
              type="checkbox" 
              checked={task.done}
              onChange={() => {console.log("Value change!")}}
             />
            {task.item}
          </label>
        ))}
      </div>
    </Fragment>
  );
}
 
export default Code;