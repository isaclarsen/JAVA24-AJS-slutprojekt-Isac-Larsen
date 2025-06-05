// TeamMemberList.jsx - Hanterar listan av medlemmar och en funktion för att ta bort medlemmar
import { ref, remove } from "firebase/database";
import { TeamMemberCard } from "./TeamMemberCard";
import { dataBase } from "../../firebase/firebaseconfig";

export function TeamMemberList({members}){

    function deleteMember(memberId){
            const memberRef = ref(dataBase, `/members/${memberId}`)
            remove(memberRef)
        }

    return(
        <div id="currentTeamContainer">
            <h3>CURRENT TEAM</h3>
            <ul>
                {members.map(member => ( 
                    <TeamMemberCard
                    key={member.id}
                    id={member.id}
                    name={member.name}
                    category={member.category}
                    deleteMember={deleteMember}
                    />
                ))}
            </ul>
        </div>
    )
}