import { AddTaskForm } from "./AddTaskForm";
import { SearchTaskForm } from "./SearchTaskForm";
import { TaskColumn } from "./TaskColumn";

export function TaskBoard({addTask, updateTask, deleteTask, members, categories, filteredTasks, searchQuery, setSearchQuery}){
    
    return(
        <div id="taskBoard">
            <div id="topTaskBoardContainer">
                <AddTaskForm categories={categories} addTask={addTask}/>
                <SearchTaskForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            </div>
            <TaskColumn categories={categories} members={members} filteredTasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask}/>
        </div>
    )
}