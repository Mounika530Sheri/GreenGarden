const Booking = require("../model/booking");

const getAvailability = async (req, res) => {
  try {
    const bookings = await Booking.find({}, "eventDate -_id");
    const bookedDates = bookings.map((b) => b.eventDate);
    res.json({ bookedDates });
  } catch (error) {
    console.error("Error fetching availability:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAvailability };
