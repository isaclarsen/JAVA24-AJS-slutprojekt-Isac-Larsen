import { TaskCard } from "./TaskCard";
import { TaskColumns } from "./TaskColumns";

export function TaskColumn({tasks, members, categories}){
    return(
        <div id="taskBoard">
            <TaskColumns categories={categories} tasks={tasks} members={members}/>
        </div>
    )
}