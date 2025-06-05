// TeamMemberPanel.jsx – Wrapper-komponent som innehåller formuläret och listan över teammedlemmar

import { TeamMemberForm } from "./TeamMemberForm";
import { TeamMemberList } from "./TeamMemberList";

export function TeamMember({categories, members}){    
    return(
        <div id="teamContainer">
            <h2>TEAM</h2>
            <TeamMemberForm categories={categories}/>
            <TeamMemberList members={members}/>
        </div>
        
    )
}