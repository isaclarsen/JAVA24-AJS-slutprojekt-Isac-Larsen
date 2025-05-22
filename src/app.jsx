import {createRoot} from "react-dom/client"
import { Header } from "./components/Header";
import { TeamMember } from "./components/team_member/TeamMember";
import { FilterSort } from "./components/filter_sort/FilterSort";
import { SortOptions } from "./components/filter_sort/SortOptions";

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
    ]

    return(
        <div>
            <Header/>
            <TeamMember categories={categories} members={members}/>
            <FilterSort categories={categories} members={members}/>
        </div>
    )
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)