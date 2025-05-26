import { TeamMemberCard } from "./TeamMemberCard";

export function TeamMemberList({members, deleteMember}){
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