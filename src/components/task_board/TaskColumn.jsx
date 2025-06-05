import { TaskColumns } from "./TaskColumns";

export function TaskColumn({filteredTasks, members, categories}){
    return(
        <div id="taskBoard">
            <TaskColumns categories={categories} filteredTasks={filteredTasks} members={members}/>
        </div>
    )
}