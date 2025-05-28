import {createRoot} from "react-dom/client"
import { Header } from "./components/header/Header";
import { TeamMember } from "./components/team_member/TeamMember";
import { FilterSort } from "./components/filter_sort/FilterSort";
import { TaskBoard } from "./components/task_board/TaskBoard";
import { useEffect, useState } from "react";
import { onValue, push, ref, remove, update } from "firebase/database";
import { dataBase } from "./firebase/firebaseconfig";

const categories = ["UX", "Backend", "Frontend", "Fullstack", "LIA"]

function App(){
    const tasksRef = ref(dataBase, "/tasks");
    const membersRef = ref(dataBase, "/members");

    const [members, setMembers] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [selectedMember, setSelectedMember] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("timestamp");
    const [sortDirection, setSortDirection] = useState("asc");
    const [searchQuery, setSearchQuery] = useState("");

    
    // ADD TASK
    function addTask({task, category}){

        //Till ISOString för att kunna validera sortering
        const timestamp = new Date().toISOString();

        try{
            const taskId = push(tasksRef).key;
            const newTasksRef = ref(dataBase, "tasks/" + taskId);
    
            const newTask = {
                task: task,
                category: category,
                timestamp: timestamp,
                status: "new", //Standard för ny task är "new"
                member: ""
            };
    
                update(newTasksRef, newTask);
    
            }catch(error){
                console.error("Something went wrong: " + error)
            };
        }
    
    // UPDATE TASK
    function updateTask(task){
        const taskRef = ref(dataBase, `/tasks/${task.id}`);
        //Från "New" => "In-progress"
        if(task.status === "new"){
            update(taskRef, {status: "in-progress", member: task.member})
            .catch(error => console.log(error));
        //Från "In-Progress" => "Finished"
        }else if(task.status === "in-progress"){
            update(taskRef, {status: "finished"})
            .catch(error => console.log(error));
        };
    }

    //DELETE TASK
    function deleteTask(taskId){
        const taskRef = ref(dataBase, `/tasks/${taskId}`);

        remove(taskRef);
    }

    function changeTheme(theme) {
        const root = document.documentElement;

        if(theme === "original"){
            root.style.setProperty('--colorTheme', 'rgba(118, 232, 83, 0.642)');

        }else if (theme === "red") {
            root.style.setProperty('--colorTheme', 'rgba(232, 83, 103, 0.642)');

        } else if (theme === "blue") {
            root.style.setProperty('--colorTheme', 'rgba(83, 179, 232, 0.642)');

        } else if (theme === "pink") {
            root.style.setProperty('--colorTheme', 'rgba(232, 83, 168, 0.642)');
        }
        
}



    //FILTER, SORT & SEARCH
    const filteredTasks = tasks
    .filter(task => {
        const matchesMember = selectedMember === "" || task.member === selectedMember;
        const matchesCategory = selectedCategory === "" || task.category === selectedCategory;
        const matchesSearch = task.task.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesMember && matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
        if (sortBy === "name") {
        return sortDirection === "asc"
            ? a.task.localeCompare(b.task)
            : b.task.localeCompare(a.task);
        } else if (sortBy === "timestamp") {
        return sortDirection === "asc"
            ? new Date(a.timestamp) - new Date(b.timestamp)
            : new Date(b.timestamp) - new Date(a.timestamp);
        }
        return 0;
    });



    //FETCH MEMBERS
    useEffect(() => {
    
        onValue(membersRef, (snapshot) => {
            const members = snapshot.val();
    
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
            <Header changeTheme={changeTheme}/>
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
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                />
            </div>
        </div>
    )
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)