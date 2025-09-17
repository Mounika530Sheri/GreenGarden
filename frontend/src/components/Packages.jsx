import React from "react";
import { useNavigate } from "react-router-dom";



export default function Packages() {
  const navigate=useNavigate()
  const packages = [
    {
      name: "Basic Package",
      price: "₹50,000",
      features: ["Hall Rental", "Basic Decoration", "Seating for 100 Guests", "Parking Facility"],
    },
    {
      name: "Premium Package",
      price: "₹70,000",
      features: ["Hall Rental", "Premium Decoration", "Seating for 300 Guests", "Catering (Veg)", "Audio/Video Setup"],
    },
    {
      name: "Luxury Package",
      price: "₹1,00,000",
      features: ["Entire Venue", "Luxury Decoration", "Seating for 500+ Guests", "Catering (Veg/Non-Veg)", "DJ/Live Music", "Dedicated Event Manager"],
    },
  ];

  

  return (
    
    <section className="packages-section">
    
      <h2 className="packages-title">Our Packages</h2>
      <div className="packages-container">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <h3 className="package-name">{pkg.name}</h3>
            <p className="package-price">{pkg.price}</p>
            <ul className="package-features">
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="package-btn" onClick={()=>navigate("/addEvent")}>Book Now</button>
          </div>
        ))}
      </div>
       
    </section>
   
  );
}
