import React from "react";

// Import images
import parking from "../assets/parking.png";
import catering from "../assets/catering.png";
import decoration from "../assets/docoration.png";
import aircondition from "../assets/aircondition.png";
import seatingcapacity from "../assets/seatingcapacity.png";

export default function Facilities() {
  const services = [
    {
      name: "Parking",
      description: "Spacious parking area for up to 200 vehicles.",
      imageUrl: parking
    },
    {
      name: "Catering",
      description: "In-house catering with customizable menus.",
      imageUrl: catering
    },
    {
      name: "Decoration",
      description:
        "Professional decoration services with multiple themes for weddings, birthdays, etc.",
      imageUrl: decoration
    },
    {
      name: "Air Conditioning",
      description:
        "Fully air-conditioned halls ensuring guest comfort in all seasons.",
      imageUrl: aircondition
    },
    {
      name: "Seating Capacity",
      description:
        "Comfortable seating arrangement for up to 1000 guests with flexible layouts.",
      imageUrl: seatingcapacity
    }
  ];

  return (
        <section className="packages-section">
        <h2 className="packages-title">Our Facilities</h2>
        <div className="card-container">
      {services.map((item, index) => (
        <div key={index} className="card">
          {/* Image Section */}
          <div className="card-image">
            <img
              src={item.imageUrl}
              alt={item.name}
              width="250px"
              height="190px"
            />
          </div>

          {/* Card Content */}
          <div className="card-body">
            <div className="title">{item.name}</div>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
