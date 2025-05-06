import React from 'react';
import { FaChevronRight } from 'react-icons/fa';




const CategoryList = ({ categories, onSelect, selectedId }) => {
  return (
    <div className="category-list">
      {categories.map(cat => (
        <div
          key={cat.id}
          className={`category-item ${selectedId === cat.id ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          <span className="icon">{cat.icon}</span>
          <span className="name">{cat.name}</span>
          {/* <span className="arrow">›</span> Right arrow here */}
          <span className="arrow"><FaChevronRight /></span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
