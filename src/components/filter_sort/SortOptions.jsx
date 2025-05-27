export function SortOptions({ sortBy, setSortBy, sortDirection, setSortDirection }) {
  return (
    <div id="filterContainer">
      <p>Sort By</p>
      <form>
        <label>Sort Field:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="timestamp">Timestamp</option>
          <option value="name">Task Name</option>
        </select>
        <br />
        <label>Direction:</label>
        <select value={sortDirection} onChange={(e) => setSortDirection(e.target.value)}>
          {sortBy === "timestamp" ? (
            <>
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </>
          ) : (
            <>
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </>
          )}
        </select>
      </form>
    </div>
  );
}
