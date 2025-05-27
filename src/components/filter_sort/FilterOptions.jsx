export function FilterOptions({
  selectedMember,
  setSelectedMember,
  selectedCategory,
  setSelectedCategory,
  members,
  categories
}) {
  return (
    <div id="filterContainer">
      <p>Filter By</p>
      <form>
        <label>Member:</label>
        <select value={selectedMember} onChange={(e) => setSelectedMember(e.target.value)}>
          <option value="">All</option>
          {members.map(member => (
            <option key={member.name} value={member.name}>
              {member.name}
            </option>
          ))}
        </select>
        <br />
        <label>Category:</label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
