export function TeamMemberCard({name, category}){
    return(
        <div id="memberCardContainer">
            <li>
                <h4>{name}</h4>
                <span className="memberTag">{category}</span>
            </li>
        </div>
    )
}