import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const CategoryList = ({ categories, onSelect, selectedId }) => {
  return (
    <div className="category-list">
      {categories.map(cat => (
        <div key={cat.id} className="category-wrapper">
          <div
            className={`category-item ${selectedId === cat.id ? 'active' : ''}`}
          >
            <span className="icon">{cat.icon}</span>
            <span className="name">{cat.name}</span>
            <span className="arrow"><FaChevronRight /></span>

            {cat.subcategories && (
              <div className="subcategory-list">
                {cat.subcategories.map((subcat, index) => (
                  <div 
                    key={index}
                    className="subcategory-item"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect({ ...cat, selectedSubcategory: subcat });
                    }}
                  >
                    {subcat}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
