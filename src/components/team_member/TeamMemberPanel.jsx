// TeamMemberPanel.jsx – Wrapper-komponent som innehåller formuläret och listan över teammedlemmar

import { TeamMemberForm } from "./TeamMemberForm";
import { TeamMemberList } from "./TeamMemberList";
import { push, ref, remove, update } from "firebase/database";
import { dataBase } from "../../firebase/firebaseconfig";

export function TeamMember({categories, members}){

    function addMember({name, category}){
        const membersRef = ref(dataBase, "/members");
        try{
            const memberId = push(membersRef).key;
            const newMembersRef = ref(dataBase, "members/" + memberId);

            const newMember = {
                name: name,
                category: category
            };

            update(newMembersRef, newMember);

        }catch(error){
            console.error("Something went wrong: " + error)
        }
    }

    function deleteMember(memberId){
            const memberRef = ref(dataBase, `/members/${memberId}`)
            remove(memberRef)
        }
    

    return(
        <div id="teamContainer">
            <h2>TEAM</h2>
            <TeamMemberForm categories={categories} addMember={addMember}/>
            <TeamMemberList members={members} deleteMember={deleteMember}/>
        </div>
        
    )
}