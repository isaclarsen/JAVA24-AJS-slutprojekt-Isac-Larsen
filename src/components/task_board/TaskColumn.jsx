import { TaskColumns } from "./TaskColumns";

export function TaskColumn({filteredTasks, members, categories, updateTask, deleteTask}){
    return(
        <div id="taskBoard">
            <TaskColumns categories={categories} filteredTasks={filteredTasks} members={members} updateTask={updateTask} deleteTask={deleteTask}/>
        </div>
    )
}