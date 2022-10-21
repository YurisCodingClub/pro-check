import { Fragment } from "react";

const Code = () => {
  /*const [check, setCheck] = useState(false);
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

  <form action="">
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
        <label>
          <input type="checkbox" />
          The project is deployed with Netlify, Vercel, Heroku, or any other platform.
        </label>
        <label>
          <input type="checkbox" />
          With <strong> Lighthouse </strong> in live view, performance, best practice, 
          accessibility, and SEO are at least 90% (green)
        </label>
        <label>
          <input type="checkbox" />
          The project is fully responsive (tested in different browsers and on different device views)
        </label>
        <label>
          <input type="checkbox" />
          When using <strong> Accessibility Insights </strong> (Google Chrome), the deployed version 
          passed the "automatic checks" and "review"
        </label>
        <label>
          <input type="checkbox" />
          All the links in the code are working and leading in the right direction
        </label>
        <label>
          <input type="checkbox" />
          The code has a good folder structure and follows best practices (folder names small, components
          large, utils functions small, etc)
        </label>
        <label>
          <input type="checkbox" />
          Code is refactored, clean (consistency on tabs, single/double quotes, etc) and as short as possible 
          (e.g. <s> margin-top: 10px; margin-right: 25px;</s> → margin: 10px 25px 0 0;)
        </label>
        <label>
          <input type="checkbox" />
          The package.json does not contain any unused packages
        </label>
        <label>
          <input type="checkbox" />
          The code is free of unused variables, functions, console.log, comments, etc
        </label>
        <label>
          <input type="checkbox" />
          The project is free of unused components, files, etc. Created with
          <strong> Create-React-App </strong>
        </label>
        <label>
          <input type="checkbox" />
         The project has a unique icon, logos in different sizes, and a thumbnail
        </label>
        <label>
          <input type="checkbox" />
          The project has a customized title (HTML)
        </label>
        <label>
          <input type="checkbox" />
          To meet responsiveness, you have preferred <strong> CSS Calculation </strong> over
          @media queries to make the code cleaner, if possible
        </label>
        <label>
          <input type="checkbox" />
          In case of many file imports, use named export (all files of a folder in one index.js)
        </label>
        <label>
          <input type="checkbox" />
          The project uses the latest versions and methodologies
        </label>
      </div>
    </Fragment>
  );
}
 
export default Code;