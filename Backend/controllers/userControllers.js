const User = require("../models/User");
const BookingHistory = require("../models/BookingHistory");
const jwt = require("jsonwebtoken");
const Hotel = require("../models/Hotels");

module.exports.userData_post = async (req, res) => {
    const { token, name, email, mob, address, country } = req.body;
    // console.log(data);
    const userId = jwt.decode(token).id;
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
            name: name,
            email: email,
            mob: mob,
            address: address,
            country: country,
        },
        { new: true }
    );
    console.log("Updated user:", updatedUser);
    res.send({
        name: updatedUser.name,
        email: updatedUser.email,
        mob: updatedUser.mob,
        address: updatedUser.address,
        country: updatedUser.country,
    });
};

module.exports.userData_get = async (req, res) => {
    console.log(req.query.token);
    const userId = jwt.decode(req.query.token).id;
    const user = await User.findById(userId);
    const response = {
        name: user.name,
        email: user.email,
        mob: user.mob,
        address: user.address,
        country: user.country,
    };
    res.send(response);
};

module.exports.bookHotel_post = async (req, res) => {
    console.log(req.body);
    const {
        hotelId,
        name,
        email,
        mob,
        hotelName,
        roomType,
        arrivalDate,
        departureDate,
        avgPrice,
        totalPrice,
        nRooms,
    } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(301).json({ message: "user not found" });
        } else {
            const booking = await BookingHistory.create({
                hotelName: hotelName,
                hotelId: hotelId,
                userID: user._id,
                BookingDuration: arrivalDate + "_" + departureDate,
                TotalPrice: totalPrice,
                RoomType: roomType,
            });

            res.status(200).json({ token: booking._id });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "internal server error" });
    }
};

module.exports.userHistory_get = async (req, res) => {
    const userId = jwt.decode(req.query.token).id;
    // console.log(req.query.token);
    // const rowData = {
    //     Booking_Date: "",
    //     Arrival_Date: "",
    //     Departure_Date: "",
    //     Duration: "",
    //     Hotel_Name: "",
    //     City_Name: "",
    //     Room_Type: "",
    //     No_Of_Persons: "",
    //     Total_Price: "",
    // };
    try {
        const history = await BookingHistory.find({ userID: userId });
        if (history.length) {
            const result = [];
            history.forEach(async (ele) => {
                // const hotel = await Hotel.findById(ele.hotelId);
                const rowData = {
                    Booking_Date: "",
                    Arrival_Date: "",
                    Departure_Date: "",
                    Duration: "",
                    Hotel_Name: "",
                    City_Name: "",
                    Room_Type: "",
                    No_Of_Persons: "",
                    Total_Price: "",
                };
                rowData.Booking_Date = ele.BookingDate;
                rowData.Arrival_Date = ele.BookingDuration.slice(0, 10);
                rowData.Departure_Date = ele.BookingDuration.slice(11);
                (rowData.Duration = getNumberOfDaysBetweenDates(
                    ele.BookingDuration.slice(0, 10),
                    ele.BookingDuration.slice(11)
                )),
                    (rowData.Hotel_Name = ele.hotelName);
                // rowData.City_Name = hotel.city // get city name
                rowData.Room_Type = ele.RoomType;
                rowData.Total_Price = ele.TotalPrice;

                result.push(rowData);
            });
            res.send(result);
        } else {
            res.send({ message: "no bookings found" });
        }
    } catch (err) {
        console.log(err.message);
        res.send("error finding history");
    }
};

async function getCity(id) {
    const hotel = await Hotel.findById(id);
    // console.log(id, hotel.city);
    return hotel.city;
}
function getNumberOfDaysBetweenDates(startDate, endDate) {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    // Calculate the difference in milliseconds between the two dates
    const differenceInMs = Math.abs(date2 - date1);

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const numberOfDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    return numberOfDays;
}

function getDuration(Arrival_Date, Departure_Date) {
    Arrival_Date = convertDateFormat(Arrival_Date);
    Departure_Date = convertDateFormat(Departure_Date);
    const dur = Math.round(
        (new Date(Departure_Date) - new Date(Arrival_Date)) /
            (1000 * 60 * 60 * 24)
    );
    return dur;
}

function convertDateFormat(inputDate) {
    const parts = inputDate.split("-");
    if (parts.length !== 3) {
        throw new Error("Invalid date format. Expected format: dd-mm-yyyy");
    }

    const day = parts[0].padStart(2, "0");
    const month = parts[1].padStart(2, "0");
    const year = parts[2];

    return `${year}-${month}-${day}`;
}
