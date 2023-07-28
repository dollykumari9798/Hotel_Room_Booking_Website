const mongoose = require("mongoose");

const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toISOString().split("T")[0]; 
};

const bookingHistorySchema = new mongoose.Schema({
    hotelName: { type: String, required: true },
    hotelId: { type: String, required: true },
    userID: { type: String, required: true },
    BookingDuration: { type: String, required: true },
    roomId: { type: String, required: true },
    BookingDate: { type: String, default: getCurrentDate },
    City: { type: String, required: true },
    NoOfPersons: { type: Number, required: true },
    TotalPrice: { type: Number, required: true },
});

const BookingHistory = mongoose.model("bookingHistory", bookingHistorySchema);

module.exports = BookingHistory;
