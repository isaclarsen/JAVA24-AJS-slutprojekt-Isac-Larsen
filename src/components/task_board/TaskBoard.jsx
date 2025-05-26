import { onValue, push, ref, remove, update } from "firebase/database";
import { AddTaskForm } from "./AddTaskForm";
import { TaskColumn } from "./TaskColumn";
import { dataBase } from "../../firebase/firebaseconfig";
import { useEffect, useState } from "react";

export function TaskBoard({addTask, members, categories}){

    const [tasks, setTasks] = useState([]);
    const tasksRef = ref(dataBase, "/tasks");

    useEffect(() => {
        
                onValue(tasksRef, (snapshot) => {
                    const tasks = snapshot.val();
                    console.log(tasks);
                    
        
                    if(!tasks){
                        setTasks([]);
                        return;
                    }
        
                    const tasksArray = Object.entries(tasks).map(([id, task]) => ({
                        id,
                        ...task
                    }));
                    setTasks(tasksArray);
                });
                return;
            },[])

    function addTask({task, category}){

                const timestamp = new Date().toLocaleString("sv-SE", {
                    month: "short",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                });

            try{
                const taskId = push(tasksRef).key;
                const newTasksRef = ref(dataBase, "tasks/" + taskId);
    
                const newTask = {
                    task: task,
                    category: category,
                    timestamp: timestamp,
                    status: "new",
                    member: ""
                };
    
                update(newTasksRef, newTask);
    
            }catch(error){
                console.error("Something went wrong: " + error)
            }
        }

    function updateTask(task){
        const taskRef = ref(dataBase, `/tasks/${task.id}`)

        if(task.status === "new"){
            update(taskRef, {status: "in-progress", member: task.member})
            .catch(error => console.log(error));
            
        }else if(task.status === "in-progress"){
            update(taskRef, {status: "finished"})
            .catch(error => console.log(error));
        };
    }

    function deleteTask(taskId){
        const taskRef = ref(dataBase, `/tasks/${taskId}`)

        remove(taskRef)
    }
    
    return(
        <div id="taskBoard">
            <AddTaskForm categories={categories} addTask={addTask}/>
            <TaskColumn categories={categories} members={members} tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
        </div>
    )
}