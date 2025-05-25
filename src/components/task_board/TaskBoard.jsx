import { AddTaskForm } from "./AddTaskForm";
import { TaskColumn } from "./TaskColumn";

export function TaskBoard({tasks, members, categories}){
    
    return(
        <div id="taskBoard">
            <AddTaskForm categories={categories} tasks={tasks}/>
            <TaskColumn categories={categories} tasks={tasks} members={members}/>
        </div>
    )
}