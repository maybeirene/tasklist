function AddTask (props){
   
    const { handleAddTask } = props

    const onAddTask = (e) => {
        
        let task = e.target[0].value 
        e.preventDefault()
        
        handleAddTask(task)
    }

    return <form className="add-task" onSubmit={onAddTask}>
        <input className="add-task__input" type="text" />
        <button className="add-task__btn">➕</button>
    </form>
}
export default AddTask