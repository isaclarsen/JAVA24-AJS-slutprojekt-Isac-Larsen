// TaskBoard.jsx – Delar upp alla uppgifter i tre kolumner baserat på deras status
import { AddTaskForm } from "./AddTaskForm";
import { SearchTaskForm } from "./SearchTaskForm";
import { TaskColumn } from "./TaskColumn";

export function TaskBoard({members, categories, filteredTasks, searchQuery, setSearchQuery}){
    
    return(
        <div id="taskBoard">
            <div id="topTaskBoardContainer">
                <AddTaskForm categories={categories}/>
                <SearchTaskForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            </div>
            <TaskColumn categories={categories} members={members} filteredTasks={filteredTasks}/>
        </div>
    )
}