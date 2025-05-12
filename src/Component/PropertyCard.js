import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ formData }) => {
  return (
    <div className="property-card">
      <h2>{formData.title || "Property Title"}</h2>
      <div className="property-image">
        {formData.photos && formData.photos.length > 0 ? (
          <img
            src={URL.createObjectURL(formData.photos[0])}
            alt="Property"
            style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }}
          />
        ) : (
          <div style={{
            width: "100%",
            height: "300px",
            backgroundColor: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            color: "#888"
          }}>
            No Image
          </div>
        )}
        <button className="wishlist-btn">♡</button>
      </div>

      <div className="property-details">
        <div className="price">₹{formData.price || "N/A"}</div>
        <div className="main-details">
          <span>{formData.bhk || "N/A"} BHK</span>
          <span>{formData.type}</span>
          <span>{formData.superBuiltupArea || "N/A"} sqft</span>
        </div>
        
        <div className="additional-details">
          <p><strong>Furnishing:</strong> {formData.furnishing || "N/A"}</p>
          <p><strong>Floor:</strong> {formData.floorNo || "N/A"}</p>
          <p><strong>Car Parking:</strong> {formData.carParking || "N/A"}</p>
          <p><strong>Facing:</strong> {formData.facing || "N/A"}</p>
        </div>

        <div className="description">
          {formData.description || "No description available"}
        </div>

        <div className="location-date">
          <span>{formData.state || "Location not specified"}</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>

        <div className="posted-by">
          <span>Posted by: {formData.name}</span>
          <span>Contact: {formData.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
