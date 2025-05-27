export function TeamMemberForm({categories, addMember}){

    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target)
        const name = formData.get("memberName")
        const category = formData.get("categorySelect")
        
        if(!name || !category){
            alert("Please fill out both name and category!")
            return;
        }

        addMember({name, category})
        event.target.reset();
    }
    
    return(
        <div id="newMemberContainer">
            <h3>Add new member</h3>
            <form id="newMemberForm" onSubmit={handleSubmit}>
                <input type="text" name="memberName" id="inputNewMember" placeholder="Name..." />
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