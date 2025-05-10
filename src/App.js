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
  const [formState, setFormState] = useState({
    category: '',
    subcategory: ''
  });
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    
    if (category.selectedSubcategory) {
      setFormState({
        category: category.name,
        subcategory: category.selectedSubcategory
      });
      setShowPostForm(true);
    } else {
      setShowPostForm(false);
    }
  };

  return (
    <div className="main-container">
      {showPostForm ? (
        <PostAdForm 
          category={formState.category}
          subcategory={formState.subcategory}
          onBack={() => setShowPostForm(false)}
        />
      ) : (
        <div className="app-container">
          <div className="category-section">
            <h2 className="category-title">Choose a Category</h2>
            <CategoryList
              categories={categories}
              selectedId={selectedCategory?.id}
              onSelect={handleCategorySelect}
            />
          </div>
          
          <div className="content-section">
            <CategoryDetails 
              selectedCategory={selectedCategory}
              items={selectedCategory ? allItems.filter(item => item.category === selectedCategory.name) : allItems}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;





