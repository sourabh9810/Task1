import React, { useState } from 'react';
import './FormComponent.css';

export default function PropertyForm() {
  const [formData, setFormData] = useState({
    type: '',
    bhk: '',
    bathrooms: '',
    furnishing: '',
    carParking: '',
    projectStatus: '',
    listedBy: '',
    title: '',
    description: '',
    price: '',
    photos: [],
    name: 'Sourabh Kumar',
    phone: '',
    state: '',
    superBuiltupArea: '',
    carpetArea: '',
    maintenance: '',
    totalFloors: '',
    floorNo: '',
    facing: ''
  });

  const [activeTab, setActiveTab] = useState("LIST");
  const [states, setStates] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const totalFiles = [...formData.photos, ...newFiles];
    const files = totalFiles.slice(0, 20);
    setFormData({ ...formData, photos: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Property Ad Posted Successfully!");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Post Your Ad</h2>
      <h3>SELECTED CATEGORY</h3>
      <p>Properties / For Sale: Houses & Apartments <span className="change-link">Change</span></p>


      <div className="form-section">
        <h3>INCLUDE SOME DETAILS</h3>
        
        <label>Type *</label>
        <div className="button-group">
          {["Flats / Apartments", "Independent / Builder Floors", "Farm House", "House & Villa"].map((type) => (
            <button
              key={type}
              type="button"
              className={formData.type === type ? "selected" : ""}
              onClick={() => handleRadioChange("type", type)}
            >
              {type}
            </button>
          ))}
        </div>

        <label>BHK *</label>
        <div className="button-group">
          {["1", "2", "3", "4", "4+"].map((bhk) => (
            <button
              key={bhk}
              type="button"
              className={formData.bhk === bhk ? "selected" : ""}
              onClick={() => handleRadioChange("bhk", bhk)}
            >
              {bhk} BHK
            </button>
          ))}
        </div>

        <label>Bathrooms *</label>
        <div className="button-group">
          {["1", "2", "3", "4", "4+"].map((bath) => (
            <button
              key={bath}
              type="button"
              className={formData.bathrooms === bath ? "selected" : ""}
              onClick={() => handleRadioChange("bathrooms", bath)}
            >
              {bath}
            </button>
          ))}
        </div>

        <label>Furnishing *</label>
        <div className="button-group">
          {["Furnished", "Semi-Furnished", "Unfurnished"].map((furnish) => (
            <button
              key={furnish}
              type="button"
              className={formData.furnishing === furnish ? "selected" : ""}
              onClick={() => handleRadioChange("furnishing", furnish)}
            >
              {furnish}
            </button>
          ))}
        </div>
      </div>

      <div className="form-section">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <label>Super Builtup area (sqft) *</label>
          <input type="text" name="superBuiltupArea" value={formData.superBuiltupArea} onChange={handleChange} />

          <label>Carpet Area (sqft) *</label>
          <input type="text" name="carpetArea" value={formData.carpetArea} onChange={handleChange} />

          <label>Maintenance (Monthly)</label>
          <input type="text" name="maintenance" value={formData.maintenance} onChange={handleChange} />

          <label>Floor No. *</label>
          <input type="text" name="floorNo" value={formData.floorNo} onChange={handleChange} />

          <label>Total Floors</label>
          <input type="text" name="totalFloors" value={formData.totalFloors} onChange={handleChange} />

          <label>Facing</label>
          <select name="facing" value={formData.facing} onChange={handleChange}>
            <option value="">Select Facing</option>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="east">East</option>
            <option value="west">West</option>
          </select>
        </div>
      </div>

      <div className="form-section">
        <label>Car Parking *</label>
        <div className="button-group">
          {["0", "1", "2", "3+"].map((parking) => (
            <button
              key={parking}
              type="button"
              className={formData.carParking === parking ? "selected" : ""}
              onClick={() => handleRadioChange("carParking", parking)}
            >
              {parking}
            </button>
          ))}
        </div>

        <label>Project Status *</label>
        <div className="button-group">
          {["Ready to Move", "Under Construction", "New Launch"].map((status) => (
            <button
              key={status}
              type="button"
              className={formData.projectStatus === status ? "selected" : ""}
              onClick={() => handleRadioChange("projectStatus", status)}
            >
              {status}
            </button>
          ))}
        </div>

        <label>Listed by *</label>
        <div className="button-group">
          {["Owner", "Dealer", "Builder"].map((listed) => (
            <button
              key={listed}
              type="button"
              className={formData.listedBy === listed ? "selected" : ""}
              onClick={() => handleRadioChange("listedBy", listed)}
            >
              {listed}
            </button>
          ))}
        </div>

        <label>Ad Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          maxLength={70}
          placeholder="Mention the key features of your property (e.g. brand, model, age, type)"
        />

        <label>Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          maxLength={4096}
          rows={4}
        />
      </div>

      <div className="form-section">
        <label>Price *</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} />
      </div>

      <div className="form-section">
        <label>Upload up to 20 photos</label>
        <div className="photo-grid">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className={`photo-slot ${formData.photos[index] ? "has-image" : ""}`}
              onClick={() => document.getElementById("photoInput").click()}
            >
              {formData.photos[index] ? (
                <img 
                  src={URL.createObjectURL(formData.photos[index])} 
                  alt={`Upload ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <>
                  <span className="camera-icon">📷</span>
                  <span className="photo-text">Add Photo</span>
                </>
              )}
            </div>
          ))}
          <input
            type="file"
            id="photoInput"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className="location-section" style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "40px auto", marginRight: "170px" }}>
        <h2 style={{ fontWeight: "bold" }}>CONFIRM YOUR LOCATION</h2>

        <div style={{ display: "flex", marginTop: "40px", borderBottom: "1px solid #ccc" }}>
          <div
            onClick={() => setActiveTab("LIST")}
            style={{
              fontWeight: "bold",
              marginRight: "150px",
              marginLeft: "0px",
              paddingBottom: "30px",
              cursor: "pointer",
              borderBottom: activeTab === "LIST" ? "3px solid #0039cb" : "none",
              color: activeTab === "LIST" ? "#000" : "#888"
            }}
          >
            LIST
          </div>
          <div
            onClick={() => setActiveTab("CURRENT LOCATION")}
            style={{
              fontWeight: "normal",
              paddingBottom: "6px",
              cursor: "pointer",
              color: activeTab === "CURRENT LOCATION" ? "#000" : "#888"
            }}
          >
            CURRENT LOCATION
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <label htmlFor="state" style={{ fontWeight: "500" }}>State *</label><br />
          <select
            name="state"
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #aaa"
            }}
          >
            <option value="" disabled>Select your state</option>
            {Array.isArray(states) &&
              states.map((state) => (
                <option key={state.id}>{state.name}</option>
              ))}
          </select>
        </div>
      </div>

      <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "750px", margin: "40px auto" }}>
        <h2 style={{ fontWeight: "bold" }}>REVIEW YOUR DETAILS</h2>

        <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
          <div style={{
            width: "100px",
            height: "100px",
            borderRadius: "60%",
            backgroundColor: "#3f51b5",
            color: "white",
            fontSize: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}>
            S
            <div style={{
              position: "absolute",
              bottom: 2,
              backgroundColor: "lightgray",
              width: "40%",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <span role="img" aria-label="camera" style={{ fontSize: "20px" }}>📷</span>
            </div>
          </div>

          <div style={{ marginLeft: "20px", flexGrow: 1 }}>
            <label htmlFor="name">Name</label><br />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              readOnly
              style={{
                width: "70%",
                padding: "10px",
                fontSize: "16px",
                marginTop: "5px",
                borderRadius: "4px",
                border: "1px solid #aaa"
              }}
            />
            <div style={{ textAlign: "right", marginRight: "170px", fontSize: "12px", color: "#666" }}>13 / 30</div>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h3 style={{ fontWeight: "bold" }}>Let's verify your account</h3>
          <p>We will send you a confirmation code by sms on the next step.</p>

          <label htmlFor="phone">Mobile Phone Number *</label><br />
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91"
            style={{
              width: "70%",
              padding: "10px",
              fontSize: "16px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #aaa"
            }}
          />
        </div>
      </div>

      <div className="form-section">
        <button type="submit" className="submit-button">Post Ad</button>
      </div>
    </form>
  );
}
