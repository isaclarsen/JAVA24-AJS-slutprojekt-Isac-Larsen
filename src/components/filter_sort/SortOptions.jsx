export function SortOptions(){
    return(
        <div id="filterContainer">
            <p>Sort By:</p>
                <form>
                    <label>Timestamp: </label>
                    <select>
                    </select>
                    <br/>
                    <label>Name: </label>
                    <select>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
                    </select>
                </form>
        </div>
    )
}