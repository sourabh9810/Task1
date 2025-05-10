const categories = [
  { id: 1, name: "Cars", icon: "🚗",
    subcategories:[
      "Cars",
    ]
   },
  {
    id: 2,
    name: "Properties",
    icon: "🏠",
    subcategories: [
      "For Sale: Houses & Apartments",
      "For Rent: Houses & Apartments",
      "Lands & Plots",
      "For Rent: Shops & Offices",
      "For Sale: Shops & Offices",
      "PG & Guest Houses"
    ] 
  },
  { id: 3, name: "Mobiles", icon: "📱" ,
     subcategories: [
      "Mobile Phones",
      "Accessories",
      "Tablets"
    ]
  },
  { id: 4, name: "Jobs", icon: "💼" ,
    subcategories: [
      "Data entry & Back office",
      "Sales & Marketing ",
      "BPO & Telecaller",
      "driver",
      "Office Assistant ",
      "Delivery & Collection",
    ]
  },
  { id: 5, name: "Bikes", icon: "🏍️",
    subcategories:[
      "Motorcycles",
      "Scooters",
      "Bicycles",
      "Spare parts"
    ]
   },
  { id: 6, name: "Electronics & Appliances", icon: "🖥️",
    subcategories:[
      "TV,Video-Auido",
      "Washing Machines",
      "Kitchen & other Appliances",
      "Computer & Laptops",
      "Cameras & Lenses",
      "Games & Entertaiment",
      "Fridges",
      "computer Accessories",
      "Hard Disks, printers & Monitors",
      "ACs",
    ]
   },
  { id: 7, name: "Commercial Vehicles & Spares", icon: "🚚",
    subcategories:[
      "Commerical & other vechiles",
      "Spare parts",
    ]
   },
  { id: 8, name: "Furniture", icon: "🛋️",
    subcategories:[
      "Home Furniture",
    ]
   },
  { id: 9, name: "Fashion", icon: "👗",
    subcategories:[
      "Men ",
      "Women",
      "Kids",

    ]
   },
  { id: 10, name: "Books, Sports & Hobbies", icon: "🎸",
    subcategories:[
      "Books",
      "Gym & Fitness",
      "Musical Instruments",
      "Sports Equipment",
      "Other Hobbies"
    ]

   },
  { id: 11, name: "Pets", icon: "🐶" ,
    subcategories:[
      "Fishes & Aquarium",
      "Pet Food & Accessories",
      "Dogs",
      "Other Pets",
    ]
  },
  { id: 12, name: "Services", icon: "🛠️", 
    subcategories:[
      "Education & Classes",
      "Health & Beauty",
       "tours & Travel",
       "Cleaining & Pets Control",
       "Packers & Movers",
       "Home Renovation & Repair"
    ]
  }
];

export default categories;








//       <div className="form-section">
//         <h2 style={{ fontWeight: "bold" }}>CONFIRM YOUR LOCATION</h2>
//         <div style={{ marginTop: "20px" }}>
//           <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
//             <div
//               onClick={() => setActiveTab("LIST")}
//               style={{
//                 fontWeight: "bold",
//                 marginRight: "20px",
//                 paddingBottom: "6px",
//                 cursor: "pointer",
//                 borderBottom: activeTab === "LIST" ? "3px solid #0039cb" : "none",
//                 color: activeTab === "LIST" ? "#000" : "#888"
//               }}
//             >
//               LIST
//             </div>
//             <div
//               onClick={() => setActiveTab("CURRENT LOCATION")}
//               style={{
//                 fontWeight: "normal",
//                 paddingBottom: "6px",
//                 cursor: "pointer",
//                 color: activeTab === "CURRENT LOCATION" ? "#000" : "#888"
//               }}
//             >
//               CURRENT LOCATION
//             </div>
//           </div>

//           <div style={{ marginTop: "30px" }}>
//             <label htmlFor="state" style={{ fontWeight: "500" }}>State *</label><br />
//             <select
//               onChange={(e) => setState(e.target.value)}
//               style={{
//                 width: "70%",
//                 padding: "10px",
//                 fontSize: "16px",
//                 marginTop: "5px",
//                 borderRadius: "4px",
//                 border: "1px solid #aaa"
//               }}
//             >
//               <option value="" disabled>Select your state</option>
//               {Array.isArray(states) &&
//                 states.map((state) => (
//                   <option key={state.id}>{state.name}</option>
//                 ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="form-section profile-section">
//         <div className="profile-header">
//           <div className="avatar-wrapper">
//             <label htmlFor="profile-photo" className="avatar clickable">
//               {formData.profilePhoto ? (
//                 <img
//                   src={URL.createObjectURL(formData.profilePhoto)}
//                   alt="Profile"
//                   className="avatar-img"
//                 />
//               ) : (
//                 <>
//                   <span className="initial">{formData.name.charAt(0)}</span>
//                   <div className="camera-overlay">📷</div>
//                 </>
//               )}
//             </label>
//             <input
//               type="file"
//               id="profile-photo"
//               accept="image/*"
//               onChange={(e) => setFormData({ ...formData, profilePhoto: e.target.files[0] })}
//               style={{ display: "none" }}
//             />
//           </div>
//           <div className="profile-info">
//             <div className="name-box">
//               <input 
//                 type="text" 
//                 value={formData.name} 
//                 disabled 
//                 className="name-input"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="form-section verification-section">
//         <h3 className="section-title">Let's verify your account</h3>
//         <p className="note-text">We will send you a confirmation code by sms on the next step.</p>
//         <div className="phone-input-container">
//           <input
//             type="tel"
//             name="phone"
//             placeholder="+91"
//             value={formData.phone}
//             onChange={handleChange}
//             className="phone-input"
//           />
//         </div>
//       </div>

//       <div className="form-section">
//         <button type="submit" className="submit-button">Post Ad</button>
//       </div>
//     </form>
//   );
// };

// export default PostAdForm;