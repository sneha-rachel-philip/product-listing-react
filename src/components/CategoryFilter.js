import '../styles/CategoryFilter.css'; // Ensure correct path

function CategoryFilter({ setSelectedCategory }) {
  return (
    <div className="category-filter"> {/* Added class */}
      <label>Filter by Category: </label>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fitness">Fitness</option>
        <option value="Fashion">Fashion</option>
        <option value="Home Appliances">Home Appliances</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
