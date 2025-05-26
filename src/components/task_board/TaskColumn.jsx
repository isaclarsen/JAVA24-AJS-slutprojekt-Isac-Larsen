import { TaskCard } from "./TaskCard";
import { TaskColumns } from "./TaskColumns";

export function TaskColumn({tasks, members, categories, updateTask, deleteTask}){
    return(
        <div id="taskBoard">
            <TaskColumns categories={categories} tasks={tasks} members={members} updateTask={updateTask} deleteTask={deleteTask}/>
        </div>
    )
}