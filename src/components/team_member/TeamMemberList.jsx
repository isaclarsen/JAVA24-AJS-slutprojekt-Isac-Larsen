import { TeamMemberCard } from "./TeamMemberCard";

export function TeamMemberList({members}){
    return(
        <div id="currentTeamContainer">
            <h3>CURRENT TEAM</h3>
            <ul>
                {members.map(member => ( 
                    <TeamMemberCard
                    key={member.name}
                    name={member.name}
                    category={member.category}
                    />
                ))}
            </ul>
        </div>
    )
}