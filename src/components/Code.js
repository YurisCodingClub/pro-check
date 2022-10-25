import { Fragment,useEffect, useState } from "react"
import { myTasks } from "../assets/constants";

const Code = () => {
  const [check, setCheck] = useState('false');
  const [checkList, setCheckList] = useState([]);


  //Function to check if localStorage has checklist data
  const fetchList = () => {
    const savedTasks = JSON.parse(localStorage.getItem('checklist'));

    if (savedTasks === null || savedTasks.length === 0) {
      localStorage.setItem('checklist', JSON.stringify(myTasks));
    }

    else {
      setCheckList(savedTasks);
    }
  }


  //Fetching checklist on first load
  useEffect(() => {
    fetchList();
  }, [check]);

  //Function to check/uncheck items 
  function checkItem(item) {
    if (item.checked === true) {
      setCheck(item.checked = false)
      const changedTask = checkList.find(obj => obj.task === item.task);
      Object.assign(changedTask, item);
      localStorage.setItem('checklist', JSON.stringify(checkList));
    }

    else {
      setCheck(item.checked = true)
      const changedTask = checkList.find(obj => obj.task === item.task);
      Object.assign(changedTask, item);
      localStorage.setItem('checklist', JSON.stringify(checkList))
    }
  }

  /*<form action="">
          //Function to add new tasks to checkList
  function addNewTask() {
    localStorage.setItem('tasks', JSON.stringify([...checkList, task]));
    fetchList();
  }

        <input 
          type="text" 
          placeholder="Insert Task..." 
          style={{'marginRight': '10px'}} 
          onChange={(e) => setTask({done: check, item: e.target.value})}
        />
        <input type="button" value="Add New Task" onClick={addNewTask} />
      </form>*/


  return (  
    <Fragment>
      <h1> Code and Live View </h1>
      <hr />
      <div style={{'marginTop': '20px'}}>
        {checkList.map((item, index) => (
          <label key={index}>
            <input 
              type="checkbox" 
              checked={item.checked === 'false' ? false : true} 
              onChange={() => checkItem(item)}
            />
            <div style={{'display': 'inline'}}  dangerouslySetInnerHTML={{__html: item.task}}></div>
          </label>
        ))}
      </div>
    </Fragment>
  );
}
 
export default Code;