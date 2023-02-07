function TaskItem (props) {
    const {data, onDoneTask, handleDeleteTask} = props
    return <div className="task-list__item">
        <p className="task-list__task">{data}</p>
        <button className="task-list__delete-button" onClick={handleDeleteTask}>🗑</button>
        <button className="task-list__done-button" onClick={onDoneTask}>✔️</button>
    </div>
}

export default TaskItem