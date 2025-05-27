import {createRoot} from "react-dom/client"
import { Header } from "./components/Header";
import { TeamMember } from "./components/team_member/TeamMember";
import { FilterSort } from "./components/filter_sort/FilterSort";
import { TaskBoard } from "./components/task_board/TaskBoard";
import { useEffect, useState } from "react";
import { onValue, push, ref, remove, update } from "firebase/database";
import { dataBase } from "./firebase/firebaseconfig";

// TODO:
//Fortsätt på TeamMember komponent
const categories = ["UX", "Backend", "Frontend", "Fullstack", "Städare"]

function App(){
    const [members, setMembers] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [selectedMember, setSelectedMember] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("timestamp")
    const [sortDirection, setSortDirection] = useState("asc");
    const membersRef = ref(dataBase, "/members");
    const tasksRef = ref(dataBase, "/tasks");

    
    // ADD TASK
    function addTask({task, category}){

        const timestamp = new Date().toISOString();

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
    
    // UPDATE TASK
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

    //DELETE TASK
    function deleteTask(taskId){
        const taskRef = ref(dataBase, `/tasks/${taskId}`)

        remove(taskRef)
    }


    //FILTER & SORT
    const filteredTasks = tasks
    .filter(task => {
        return (
        (selectedMember === "" || task.member === selectedMember) &&
        (selectedCategory === "" || task.category === selectedCategory)
        );
    })
    .sort((a, b) => {
        if (sortBy === "name") {
        return sortDirection === "asc"
            ? a.task.localeCompare(b.task)
            : b.task.localeCompare(a.task);
        } else if (sortBy === "timestamp") {
            console.log("timestamps being sorted:");
            tasks.forEach(task => console.log(task.timestamp, new Date(task.timestamp)));

        return sortDirection === "asc"
            ? new Date(a.timestamp) - new Date(b.timestamp)
            : new Date(b.timestamp) - new Date(a.timestamp);
        }
        return 0; // No sorting applied
    });


        
        useEffect(() => {
    
            onValue(membersRef, (snapshot) => {
                const members = snapshot.val();
                console.log(members);
                
    
                if(!members){
                    setMembers([]);
                    return;
                }
    
                const membersArray = Object.entries(members).map(([id, member]) => ({
                    id,
                    ...member
                }));
                setMembers(membersArray);
            });
            return;
        },[])

        //FETCH TASKS
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


    return(
        <div id="container">
            <Header/>
            <div id="topSection">
                <div id="leftSidebar">
                    <TeamMember categories={categories} members={members}/>
                    <FilterSort
                    categories={categories}
                    members={members}
                    selectedMember={selectedMember}
                    setSelectedMember={setSelectedMember}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    sortDirection={sortDirection}
                    setSortDirection={setSortDirection}
                    />
                </div>
                <TaskBoard
                categories={categories}
                members={members}
                filteredTasks={filteredTasks}
                addTask={addTask}
                updateTask={updateTask}
                deleteTask={deleteTask}
                />
            </div>
        </div>
    )
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)