function TaskItem (props) {
    const {data, index, onDoneTask, onDeleteTask} = props

    const handleDeleteClick = () =>{
        onDeleteTask(index)
    }
    const handleDoneClick = () =>{
        onDoneTask(index)
    }
    
    if (data.status === 1){
        return <div className="task-list__item--done">
        <p className="task-list__task">{data.title}</p>
        <button className="task-list__delete-button" onClick={handleDeleteClick}>🗑</button>
        <button className="task-list__done-button" onClick={handleDoneClick} disabled>✔️</button>
    </div>
    } else if (data.status === 0){
        return <div className="task-list__item">
        <p className="task-list__task">{data.title}</p>
        <button className="task-list__delete-button" onClick={handleDeleteClick}>🗑</button>
        <button className="task-list__done-button" onClick={handleDoneClick}>✔️</button>
    </div>
    } else {
        return <div className="task-list__item">
        <p className="task-list__task">'ups'</p>
    </div>
    }

    
}

export default TaskItem