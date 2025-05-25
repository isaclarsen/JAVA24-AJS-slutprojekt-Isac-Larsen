import {createRoot} from "react-dom/client"
import { Header } from "./components/Header";
import { TeamMember } from "./components/team_member/TeamMember";
import { FilterSort } from "./components/filter_sort/FilterSort";
import { SortOptions } from "./components/filter_sort/SortOptions";
import { TaskBoard } from "./components/task_board/TaskBoard";
import { TaskColumn } from "./components/task_board/TaskColumn";

// TODO:
//Fortsätt på TeamMember komponent

function App(){
    const categories = ["UX", "Backend", "Frontend", "Fullstack", "Sminkare"]

    const members = [
        {
            name: "Isac",
            category: "Fullstack"
        },
        {
            name: "Julia",
            category: "UX"
        },
        {
            name: "Enzo",
            category: "Backend"
        },
        {
            name: "Hannah",
            category: "Sminkare"
        },
        {
            name: "Karl",
            category: "Frontend"
        },
    ]

    const timestamp = new Date().toLocaleString("sv-SE", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    });


    const tasks = [
        {
            id: 1,
            task: "Göra disken",
            timestamp: timestamp,
            category: "Fullstack",
            status: "new",
            assignedTo: ""
        },
        {
            id: 2,
            task: "Torka disken",
            timestamp: timestamp,
            category: "UX",
            status: "new",
            assignedTo: ""
        },
        {
            id: 3,
            task: "Torka disken",
            timestamp: timestamp,
            category: "UX",
            status: "finished",
            assignedTo: "Julia"
        },
        {
            id: 4,
            task: "Torka disken",
            timestamp: timestamp,
            category: "UX",
            status: "in-progress",
            assignedTo: "Julia"
        },
        {
            id: 5,
            task: "Laga mat",
            timestamp: timestamp,
            category: "Frontend",
            status: "in-progress",
            assignedTo: "Karl"
        },
        {
            id: 6,
            task: "Äta mat",
            timestamp: timestamp,
            category: "Backend",
            status: "finished",
            assignedTo: "Enzo"
        },
        {
            id: 7,
            task: "Sminka någon",
            timestamp: timestamp,
            category: "Sminkare",
            status: "new",
            assignedTo: ""
        }
    ]

    return(
        <div id="container">
            <Header/>
            <div id="topSection">
                <div id="leftSidebar">
                    <TeamMember categories={categories} members={members}/>
                    <FilterSort categories={categories} members={members}/>
                </div>
                <TaskBoard categories={categories} tasks={tasks} members={members}/>
            </div>
        </div>
    )
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)