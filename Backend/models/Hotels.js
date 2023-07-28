const mongoose = require("../config.js");
// const mongoose = require("mongoose");

const roomInfoSchema = new mongoose.Schema({
    id: { type: String, required: true },
    bookingDate: { type: String, required: true },
    status: { type: String, required: true },
});

const roomSchema = new mongoose.Schema({
    type: { type: String, required: true },
    qty: { type: Number, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: true },
    roomInfo: [roomInfoSchema],
});

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    features: [String],
    rating: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    location: { type: String, required: true },
    rooms: [roomSchema],
});

// fire the function after saving the data in the db
hotelSchema.post("save", function (doc, next) {
    console.log("new user was created and saved", doc);
    next();
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
