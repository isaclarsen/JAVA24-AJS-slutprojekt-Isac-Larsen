
// AddTaskForm.jsx - Hanterar ett formulär där tasks kan läggas in i databas
import { push, ref, update } from "firebase/database";
import { dataBase } from "../../firebase/firebaseconfig";

export function AddTaskForm({categories}){

    function handleSubmit(event){
        event.preventDefault();
        const task = event.target.newTask.value;
        const category = event.target.categorySelect.value;

        if (!task || !category) return;

        const timestamp = new Date().toISOString();
        const taskId = push(ref(dataBase, "tasks")).key;
        const newTasksRef = ref(dataBase, "tasks/" + taskId);

        const newTask = {
        task,
        category,
        timestamp,
        status: "new",
        member: ""
    };

        update(newTasksRef, newTask)
        .catch(error => console.error("Something went wrong: " + error));

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