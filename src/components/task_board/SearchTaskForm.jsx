export function SearchTaskForm({searchQuery, setSearchQuery}){
    return(
        <div id="searchTaskContainer">
            <h2>SEARCH TASK</h2>
            <form>
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
        </div>
    )
}