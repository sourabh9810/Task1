import React from "react";

export default function Sidebar({ setSelectedCategory }) {
  const categories = ["Cars", "Bikes", "Mobiles", "Laptops", "Post Ad"];

  return (
    <div className="sidebar">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setSelectedCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}
