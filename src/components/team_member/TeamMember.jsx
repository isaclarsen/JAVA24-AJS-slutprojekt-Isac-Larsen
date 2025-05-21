import { TeamMemberForm } from "./TeamMemberForm";

export function TeamMember({categories}){
    return(
        <div>
            <TeamMemberForm categories={categories}/>
            {/* <TeamMemberList/> */}
        </div>
        
    )
}