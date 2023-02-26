import {useState} from 'react'
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList.jsx';
import EmptyTasks from './EmptyTasks';

function App() {
  const [tasks, setTasks] = useState([]);


  const addTask = (task) => {
    let newTaskList = tasks.concat({"title": task, "status": 0})
    setTasks(newTaskList)
  }

  const deleteTask = (index) => {

    console.log('deletetask')
  }

  const cleanAllTasks = () => {
    setTasks([])
  }

  const doneTask = (index) => {
    let newTaskList = tasks;
    newTaskList[index].status = 1
    setTasks(newTaskList) 
  }

  return (
    <div className="App">    
      
      <AddTask handleAddTask={addTask}/>
      {
        tasks.length > 0 ? 
        <TaskList taskListData={tasks} handleDoneTask={doneTask} handleDeleteTask={deleteTask}/> 
        :
        <EmptyTasks/>
      }
      
      <button className="clean-all-task-button" onClick={cleanAllTasks}>Clean all</button>
    </div>
  );
}

export default App;
