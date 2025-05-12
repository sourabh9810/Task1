import React, { useState } from "react";
// import "./PostAdForm.css";

const PostAdForm = () => {
  const [formData, setFormData] = useState({
    state: "",
    name: "Sourabh Kumar",
    phone: "",
    brand: "",
    year: "",
    fuel: "",
    transmission: "",
    kmDriven: "",
    owners: "",
    title: "",
    description: "",
    price: "",
    photos: [],
    profilePhoto: null,
  });
  
  const [activeTab, setActiveTab] = useState("LIST");
  const [states, setState] = useState([]);
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
    const files = totalFiles.slice(0, 20); // Limit to 20 photos
    setFormData({ ...formData, photos: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Ad Posted Successfully!");
  };

  return (
    
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Post Your Ad</h2>

      <div className="form-section">
        <label>Brand *</label>
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} />

        <label>Year *</label>
        <input type="text" name="year" value={formData.year} onChange={handleChange} />

        <label>Fuel *</label>
        <div className="button-group">
          {["CNG & Hybrids", "Diesel", "Electric", "LPG", "Petrol"].map((fuel) => (
            <button
              key={fuel}
              type="button"
              className={formData.fuel === fuel ? "selected" : ""}
              onClick={() => handleRadioChange("fuel", fuel)}
            >
              {fuel}
            </button>
          ))}
        </div>

        <label>Transmission *</label>
        <div className="button-group">
          {["Automatic", "Manual"].map((trans) => (
            <button
              key={trans}
              type="button"
              className={formData.transmission === trans ? "selected" : ""}
              onClick={() => handleRadioChange("transmission", trans)}
            >
              {trans}
            </button>
          ))}
        </div>
      </div>

      <div className="form-section">
        <label>KM driven *</label>
        <input type="text" name="kmDriven" value={formData.kmDriven} onChange={handleChange} />

        <label>No. of Owners *</label>
        <div className="button-group">
          {["1st", "2nd", "3rd", "4th", "4+"].map((owner) => (
            <button
              key={owner}
              type="button"
              className={formData.owners === owner ? "selected" : ""}
              onClick={() => handleRadioChange("owners", owner)}
            >
              {owner}
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
                  alt={`Upload ${index + 20}`}
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

      <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "40px auto" , marginRight:"170px" }}>
      <h2 style={{ fontWeight: "bold" ,  }}>CONFIRM YOUR LOCATION</h2>

      {/* Tabs */}
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

      {/* State Dropdown */}
      <div style={{ marginTop: "30px" }}>
        <label htmlFor="state" style={{ fontWeight: "500" }}>State *</label><br />
        <select
         onChange={(e) => setState(e.target.value)}
         

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
            backgroundColor:"lightgray",
            
            width: "40%",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <span role="img" aria-label="camera" style={{ fontSize: "20px" }}>📷</span>
          </div>
        </div>

        <div style={{ marginLeft: "20px", flexGrow: 1}}>
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            id="name"
            value="Sourabh Kumar"
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
          <div style={{ textAlign: "right",  marginRight:"170px", fontSize: "12px", color: "#666" }}>13 / 30</div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3 style={{ fontWeight: "bold" }}>Let's verify your account</h3>
        <p>We will send you a confirmation code by sms on the next step.</p>

        <label htmlFor="phone">Mobile Phone Number *</label><br />
        <input
          type="text"
          id="phone"
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
};

export default PostAdForm;