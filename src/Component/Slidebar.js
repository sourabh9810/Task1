import React from "react";
import categories from '../DATA/categories';

export default function Sidebar({ setSelectedCategory }) {
  return (
    <div className="sidebar">
      <button onClick={() => setSelectedCategory(null)}>All Categories</button>
      {categories.map((category) => (
        <button 
          key={category.id} 
          onClick={() => setSelectedCategory(category)}
          className="sidebar-button"
        >
          <span className="category-icon">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
}

// import React from "react";

// export default function Sidebar({ setSelectedCategory }) {
//   const categories = ["Cars", "Bikes", "Mobiles", "Laptops", "Post Ad"];

//   return (
//     <div className="sidebar">
//       {categories.map((cat) => (
//         <button key={cat} onClick={() => setSelectedCategory(cat)}>
//           {cat}
//         </button>
//       ))}
//     </div>
//   );
// }
