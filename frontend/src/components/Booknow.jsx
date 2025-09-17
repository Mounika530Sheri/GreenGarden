import React, { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, [e.target.name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formattedData = { ...formData };

    if (formattedData.eventDate && formattedData.eventDate.includes("-")) {
      const [year, month, day] = formattedData.eventDate.split("-");
      formattedData.eventDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
        2,
        "0"
      )}`;
    }

    try {
      const res = await axios.post("http://localhost:5000/addbooking", formattedData,{
        headers:{
          'Content-Type':'application/json',
          'authorization':'bearer '+localStorage.getItem("token")
      }
    });
      setMessage(res.data.message);
      setError("");

      // ✅ Redirect to payment gateway after booking
      redirectToPayment(formattedData.package);

      setFormData({});
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed. Try again.");
      setMessage("");
    }
  };

  // Function to redirect based on package
  const redirectToPayment = (selectedPackage) => {
    let amount = 0;
    if (selectedPackage === "Basic") amount = 50000;
    if (selectedPackage === "Premium") amount = 70000;
    if (selectedPackage === "Luxury") amount = 100000;

    // Convert amount into paise for UPI (if needed)
    const upiAmount = amount.toString();

    // ✅ Example UPI Payment Deep Link (PhonePe / Google Pay)
    const upiLink = `upi://pay?pa=sherimounika100@oksbi&pn=ConventionHall&am=${upiAmount}&cu=INR`;

    window.location.href = upiLink; // Redirect to payment app
    console.log("Redirecting to UPI link:", upiLink);
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Convention Booking</h2>

      {message && <p className="success-msg">{message}</p>}
      {error && <p className="error-msg">{error}</p>}

      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Row 1 - Event Date & Event Type */}
        <div className="form-row">
          <div className="form-control-book">
            <label>Event Date</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control-book">
            <label>Event Type</label>
            <select
              name="eventType"
              value={formData.eventType || ""}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Conference">Conference</option>
              <option value="Reception">Reception</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Row 2 - Package & Guests */}
        <div className="form-row">
          <div className="form-control-book">
            <label>Package</label>
            <select
              name="package"
              value={formData.package || ""}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Basic">Basic - ₹50,000</option>
              <option value="Premium">Premium - ₹70,000</option>
              <option value="Luxury">Luxury - ₹1,00,000</option>
            </select>
          </div>

          <div className="form-control-book">
            <label>Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests || ""}
              onChange={handleChange}
              min="1"
              placeholder="Enter guests"
              required
            />
          </div>
        </div>

        {/* Row 3 - Client Name & Mobile Number */}
        <div className="form-row">
          <div className="form-control-book">
            <label>Client Name</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName || ""}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-control-book">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Book Now
        </button>
      </form>
    </div>
  );
}
