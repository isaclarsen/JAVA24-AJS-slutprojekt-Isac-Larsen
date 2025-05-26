export function AddTaskForm({categories, addTask}){

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target)
        const task = formData.get("newTask")
        const category = formData.get("categorySelect")
        
        if(!task || !category){
            alert("Please fill out both task and category!")
            return;
        }

        addTask({task, category})
        event.target.reset();
    }
    
    return(
    <div id="addTaskContainer">
        <h2>ADD NEW TASK</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="newTask" placeholder="Task..." />
                <br/>
                <select name="categorySelect" id="categorySelect">
                    {
                        categories.map(category => 
                            <option key={category} value={category}>{category}</option>
                        )
                    }
                </select>
                <button>Add</button>
            </form>
    </div>
    )
}