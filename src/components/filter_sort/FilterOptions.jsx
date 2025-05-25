export function FilterOptions({members, categories}){
    return(
        <div id="filterContainer">
            <p>Filter By</p>
                <form>
                    <label>Member: </label>
                    <select>
                        {
                            members.map(member => 
                                <option key={member.name} value={member.name}>{member.name}</option>
                            )
                        }
                    </select>
                    <br/>
                    <label>Category: </label>
                    <select>
                        {
                            categories.map(category =>
                                <option key={category} value={category}>{category}</option>
                            )
                        }
                    </select>
                </form>
        </div>
    )
}