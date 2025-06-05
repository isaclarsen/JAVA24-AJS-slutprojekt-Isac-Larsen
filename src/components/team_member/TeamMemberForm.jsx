// TeamMemberForm.jsx - Hanterar formuläret för att lägga in nya medlemmar i databas 
import { push, ref, update } from "firebase/database";
import { dataBase } from "../../firebase/firebaseconfig";

export function TeamMemberForm({categories, addMember}){

    //Lägger in medlemmar i databas
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
    //Hanterar input
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
                <button>Add</button>
            </form>
        </div>
    )
}