export function TeamMemberForm({categories}){
    return(
        <div id="newMemberContainer">
            <h3>Add new member</h3>
            <form id="newMemberForm">
                <input type="text" name="memberName" id="inputNewMember" placeholder="Namn..." />
                <select name="categorySelect" id="categorySelect">
                    {
                        categories.map(category =>
                            <option key={category} value={category}>{category}</option>
                        )
                    }
                </select>
                <button>Lägg till</button>
            </form>
        </div>
    )
}