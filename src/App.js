import React, { useState } from 'react';
import CategoryList from './Component/CategoryList';
import CategoryDetails from './Component/CategoryDetails';
import categories from './DATA/categories';
import './App.css';
import PostAdForm from './Component/PostAdForm';

const allItems = [
  {
    id: 1,
    category: "Bikes",
    title: "Yamaha R15 V3",
    price: "₹1,05,000",
    location: "Delhi",
    time: "2 hrs ago",
    image: "https://via.placeholder.com/300x200",
   },
  {
    id: 2,
    category: "Mobiles",
    title: "iPhone 13 Pro",
    price: "₹75,000",
    location: "Mumbai",
    time: "1 day ago",
    image: "https://via.placeholder.com/300x200",
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPostForm, setShowPostForm] = useState(false);
  
  const filteredItems = !selectedCategory
    ? allItems
    : allItems.filter((item) => item.category === selectedCategory.name);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowPostForm(category.name === "Cars");
  };

  return (
    <div className="app-container">
      <CategoryList
        categories={categories}
        selectedId={selectedCategory?.id}
        onSelect={handleCategorySelect}
      />
      {showPostForm ? (
        <PostAdForm />
      ) : (
        <CategoryDetails 
          selectedCategory={selectedCategory?.name} 
          items={filteredItems}
        />
      )}
    </div>
  );
}

export default App;
