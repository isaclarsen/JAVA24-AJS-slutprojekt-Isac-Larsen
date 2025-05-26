import {createRoot} from "react-dom/client"
import { Header } from "./components/Header";
import { TeamMember } from "./components/team_member/TeamMember";
import { FilterSort } from "./components/filter_sort/FilterSort";
import { SortOptions } from "./components/filter_sort/SortOptions";
import { TaskBoard } from "./components/task_board/TaskBoard";
import { TaskColumn } from "./components/task_board/TaskColumn";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { dataBase } from "./firebase/firebaseconfig";

// TODO:
//Fortsätt på TeamMember komponent

function App(){
    const categories = ["UX", "Backend", "Frontend", "Fullstack", "Sminkare", "Städare"]

    const [members, setMembers] = useState([]);
        const membersRef = ref(dataBase, "/members");
        
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


    return(
        <div id="container">
            <Header/>
            <div id="topSection">
                <div id="leftSidebar">
                    <TeamMember categories={categories} members={members}/>
                    <FilterSort categories={categories} members={members}/>
                </div>
                <TaskBoard categories={categories} members={members}/>
            </div>
        </div>
    )
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)