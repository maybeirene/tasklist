import TaskItem from "./TaskItem"

function TaskList (props) {
    const {taskListData, handleDoneTask, handleDeleteTask} = props
    let countKey = 0
    let taskList = Array.from(taskListData)

    return <ul className="task-list">
        {taskList.map(task =>{
            countKey++
            return<li key={countKey}>
                <TaskItem data={task} onDoneTask={handleDoneTask} handleDeleteTask={handleDeleteTask}/>
            </li>
        })}
    </ul>
}

export default TaskList