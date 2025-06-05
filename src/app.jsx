// App.jsx - Huvudkomponent som hanterar global state, databaslyssning och layout
// Importerar nödvändiga komponenter och Firebase-funktioner
import {createRoot} from "react-dom/client"
import { Header } from "./components/header/Header";
import { TeamMember } from "./components/team_member/TeamMemberPanel";
import { FilterSort } from "./components/filter_sort/FilterSort";
import { TaskBoard } from "./components/task_board/TaskBoard";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { dataBase } from "./firebase/firebaseconfig";

// Lista av kategorier som kan tilldelas uppgifter och teammedlemmar
const categories = ["UX", "Backend", "Frontend", "Fullstack", "LIA"]

function App(){
    const tasksRef = ref(dataBase, "/tasks");
    const membersRef = ref(dataBase, "/members");

    //useStates
    const [members, setMembers] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [selectedMember, setSelectedMember] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("timestamp");
    const [sortDirection, setSortDirection] = useState("asc");
    const [searchQuery, setSearchQuery] = useState("");


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



    //FETCH MEMBERS FROM FIREBASE
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

     //FETCH TASKS FROM FIREBASE
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
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                />
            </div>
        </div>
    )
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)