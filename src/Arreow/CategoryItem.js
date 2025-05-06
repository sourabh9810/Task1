import React from "react";

const CategoryItem = ({ icon, label, }) => {
  return (
    <div
      className="category-item"
    

    
    >
        <IoIosArrowForward/>
      
      <div className="right">
      </div>
    </div>
  );
};

const IoIosArrowForward = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="gray"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default CategoryItem;
