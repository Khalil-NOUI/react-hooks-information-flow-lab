import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {

  return (
    <div className="Filter" style={{padding: "3px", border: "3px solid #F8F955"}}>
      <select name="filter" onChange={onCategoryChange} value={selectedCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
