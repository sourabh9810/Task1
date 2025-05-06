import React, { useState } from 'react';
import CategoryList from './Component/CategoryList';
import CategoryDetails from './Component/CategoryDetails';
import categories from './DATA/categories';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="app-container">
      <CategoryList
        categories={categories}
        selectedId={selectedCategory?.id}
        onSelect={setSelectedCategory}
        
      />
      <CategoryDetails selectedCategory={selectedCategory} />
    </div>
  );
}
export default App;
