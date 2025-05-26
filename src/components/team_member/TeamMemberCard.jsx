export function TeamMemberCard({name, category, id, deleteMember}){

    function handleClick(){        
        deleteMember(id)
    }

    return(
        <div id="memberCardContainer">
            <li>
                <h4>{name}</h4>
                <span className="memberTag">{category}</span>
                <div className="deleteIconContainer">
                    <img className="deleteIcon" src="https://cdn-icons-png.flaticon.com/512/70/70757.png" alt="delete" onClick={handleClick}/>
                </div>
            </li>
        </div>
    )
}