import {createRoot} from "react-dom/client"
import { Header } from "./components/Header";
import { TeamMember } from "./components/team_member/TeamMember";

function App(){
    const categories = ["UX", "Backend", "Frontend"]
    return(
        <div>
            <Header/>
            <TeamMember categories={categories}/>
        </div>
    )
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>)