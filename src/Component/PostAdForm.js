import React, { useState } from "react"; 

export default function PostAdForm() {
  const [formData, setFormData] = useState({
    brand: "",
    year: "",
    fuel: "",
    transmission: "",
    kmDriven: "",
    owners: "",
    title: "",
    description: "",
    price: "",
    state: "",
    name: "",
    phone: "",
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files].slice(0, 20),
    }));
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Post Your Ad</h2>

      <select name="brand" onChange={handleChange} required>
        <option value="">Select Brand</option>
        <option value="Maruti">Maruti</option>
        <option value="Hyundai">Hyundai</option>
      </select>

      <input type="number" name="year" placeholder="Year" onChange={handleChange} required />

      <div style={{ display: "flex", gap: "10px" }}>
        {["Petrol", "Diesel", "CNG", "Electric"].map((fuel) => (
          <button
            type="button"
            key={fuel}
            style={{
              border: "1px solid gray",
              padding: "5px 10px",
              backgroundColor: formData.fuel === fuel ? "#add8e6" : "",
            }}
            onClick={() => setFormData((prev) => ({ ...prev, fuel }))}
          >
            {fuel}
          </button>
        ))}
      </div>

      <input name="kmDriven" type="number" placeholder="KM Driven" onChange={handleChange} />
      <input name="owners" placeholder="Number of Owners" onChange={handleChange} />
      <input name="title" placeholder="Ad Title" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price ₹" onChange={handleChange} required />
      <input type="file" multiple onChange={handlePhotoUpload} />

      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {formData.photos.map((photo, index) => (
          <img
            key={index}
            src={URL.createObjectURL(photo)}
            alt="preview"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
        ))}
      </div>

      <input name="name" placeholder="Your Name" onChange={handleChange} required />
      <input name="phone" placeholder="Mobile Phone Number" onChange={handleChange} required />

      <select name="state" onChange={handleChange} required>
        <option value="">Select State</option>
        <option value="Delhi">Delhi</option>
        <option value="Maharashtra">Maharashtra</option>
      </select>

      <button type="submit" style={{ background: "#007bff", color: "white", padding: "10px", border: "none" }}>
        Post Now
      </button>
    </form>
  );
}
