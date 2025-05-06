import React from 'react';

const CategoryDetails = ({ selectedCategory }) => {
  if (!selectedCategory) return <div className="details-panel">Select a category</div>;

  return (
    <div className="details-panel">
      {selectedCategory.subcategories ? (
        <ul className="subcategory-list">
          {selectedCategory.subcategories.map((item, index) => (
            <li key={index} className="subcategory-item">{item}</li>
          ))}
        </ul>
      ) : (
        <p>No subcategories available for {selectedCategory.name}</p>
      )}
    </div>
  );
};

export default CategoryDetails;
