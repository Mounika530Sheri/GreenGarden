const Booking = require("../model/booking");

const addEvent = async (req, res) => {
  try {
    let { eventDate, eventType, clientName, guests, mobileNumber,package } = req.body;

    // Convert eventDate to proper Date object if it's a string in DD-MM-YYYY
    if (eventDate.includes("-")) {
      const parts = eventDate.split("-");
      // Check if it's DD-MM-YYYY, convert to YYYY-MM-DD
      if (parts[2].length === 4) {
        eventDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
      } else {
        eventDate = new Date(eventDate);
      }
    } else {
      eventDate = new Date(eventDate);
    }

    // Validate mobile number
    const mobileRegex = /^[6-9][0-9]{9}$/;
    if (!mobileRegex.test(mobileNumber)) {
      return res.status(400).json({ message: "Invalid mobile number" });
    }

    // Check if date is already booked
    const existingBooking = await Booking.findOne({ eventDate });
    if (existingBooking) {
      return res.status(400).json({ message: "This event date is already booked" });
    }

    // Create new booking
    const newEvent = await Booking.create({ eventDate, eventType, clientName, guests, mobileNumber,package,createdBy:req.user.id });

    return res.status(201).json({ message: "Booking successful", data: newEvent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};


module.exports = { addEvent };
