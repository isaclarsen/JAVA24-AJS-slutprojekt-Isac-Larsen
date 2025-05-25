export function AddTaskForm({tasks, categories}){
    return(
    <div id="addTaskContainer">
        <h2>ADD NEW TASK</h2>
            <form>
                <input type="text" placeholder="Task..." />
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