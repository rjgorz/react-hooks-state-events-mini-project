import React from "react";

function CategoryFilter({ categories, selectedCategory, handleCategoryChange }) {
  const categoryButtons = categories.map(category => {
    return (
      <button key={category} onClick={() => handleCategoryChange(category)} className={category === selectedCategory ? "selected" : null}>
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
