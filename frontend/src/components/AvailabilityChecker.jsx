import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


export default function AvailabilityChecker() {
  const [bookedDates, setBookedDates] = useState([]);

  const normalizeDate = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  };

  useEffect(() => {
    const fetchAvailability = () => {
      fetch("http://localhost:5000/availability") // ✅ Fixed API URL
        .then((res) => res.json())
        .then((data) => {
          setBookedDates(data.bookedDates.map((d) => new Date(d)));
        })
        .catch((err) => console.error("Error fetching availability:", err));
    };

    fetchAvailability();
    window.addEventListener("booking-updated", fetchAvailability);
    return () => window.removeEventListener("booking-updated", fetchAvailability);
  }, []);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const isBooked = bookedDates.some(
        (d) => normalizeDate(d) === normalizeDate(date)
      );
      return isBooked ? "booked-date" : "available-date";
    }
  };

  return (
    <div className="inner">
    <div className="availability-container">
      <h2 className="availability-title">📅 Check Availability</h2>
      <Calendar tileClassName={tileClassName} />
      <div className="legend">
        <span className="legend-box booked-date"></span> Booked
        <span className="legend-box available-date"></span> Available
      </div>
    </div>
    </div>
  );
}
