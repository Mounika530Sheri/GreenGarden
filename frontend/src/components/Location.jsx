import React from "react";

export default function Location() {
  return (
   
    <section className="inner">
      <div className="venue-location">
      <h2 className="venue-title">Our Location</h2>
      <p className="venue-description">
        Visit us at our venue. We are conveniently located and easy to reach.
      </p>

      <div className="venue-map-container" style={{ width: "100%", height: "400px" }}>
        <iframe
          title="Venue Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.884513431381!2d79.43668787861424!3d17.655627940161537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34ad0e53de61a5%3A0xd0fd9b8abb34720f!2sReddy%20Garden%2C%20Palakurthy!5e0!3m2!1sen!2sin!4v1757911193453!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
    </section>
    
  );
}
