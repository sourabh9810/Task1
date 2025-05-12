import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyGrid.css';

const properties = [
  {
    image: 'https://via.placeholder.com/300x180',
    price: '₹ 42,50,000',
    details: '2 Bds - 2 Ba - 1150 ft²',
    description: 'Super luxury apartment in Noida sector 73',
    location: 'NOIDA, UTTAR PRADESH',
    date: 'TODAY',
  },
  {
    image: 'https://via.placeholder.com/300x180',
    price: '₹ 49,99,999',
    details: '2 BHK - 2 Bathroom - 1000 sqft',
    description: 'SUPER luxurious 2 BHK flat in Noida',
    location: 'SECTOR 104, NOIDA',
    date: 'TODAY',
  },
  // ... more cards
];

const PropertyGrid = () => {
  return (
    <div className="property-grid">
      {properties.map((prop, index) => (
        <PropertyCard key={index} {...prop} />
      ))}
    </div>
  );
};

export default PropertyGrid;
