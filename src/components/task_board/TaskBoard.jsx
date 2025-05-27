import { onValue, push, ref, remove, update } from "firebase/database";
import { AddTaskForm } from "./AddTaskForm";
import { TaskColumn } from "./TaskColumn";
import { dataBase } from "../../firebase/firebaseconfig";
import { useEffect, useState } from "react";

export function TaskBoard({addTask, updateTask, deleteTask, members, categories, filteredTasks}){
    
    return(
        <div id="taskBoard">
            <AddTaskForm categories={categories} addTask={addTask}/>
            <TaskColumn categories={categories} members={members} filteredTasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask}/>
        </div>
    )
}