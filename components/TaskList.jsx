import TaskItem from "./TaskItem"

function TaskList (props) {
    const {taskListData, handleDoneTask, handleDeleteTask} = props
    let taskList = Array.from(taskListData)
    
    

    return <ul className="task-list">
        {taskList.map(task =>{
            return<li key={taskListData.indexOf(task)}>
                <TaskItem data={task} index={taskListData.indexOf(task)} onDoneTask={handleDoneTask} onDeleteTask={handleDeleteTask}/>
                <p>{task.status}</p>
            </li>
        })}
    </ul>
}

export default TaskList