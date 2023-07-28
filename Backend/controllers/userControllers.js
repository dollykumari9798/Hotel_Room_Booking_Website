const User = require("../models/User");
const BookingHistory = require("../models/BookingHistory");
const jwt = require("jsonwebtoken");
const Hotel = require("../models/Hotels");

module.exports.userData_post = async (req, res) => {
    const { userId, address, country } = req.body;
    // console.log(data);
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { address: address, country: country },
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
    // console.log(req.body.user);
    const userId = jwt.decode(req.body.token).id;
    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(301).json({ message: "user not found" });
        } else {
            const {
                hotelName,
                hotelId,
                BookingDuration,
                City,
                roomId,
                NoOfPersson,
                TotalPrice,
            } = req.body;
            const booking = await BookingHistory.create({
                hotelName: hotelName,
                hotelId: hotelId,
                userID: userId,
                BookingDuration: BookingDuration,
                roomId: roomId,
                City: City,
                NoOfPersons: NoOfPersson,
                TotalPrice: TotalPrice,
            });
            // changing the status of the room
            const hotel = await Hotel.findById(hotelId);
            const roomType = getRoomType(roomId);
            // console.log(hotel.name, hotel.rooms);
            // console.log(roomType);
            if (roomType == "Double Bed") {
                console.log("db");
                hotel.rooms[0].roomInfo[Number(roomId.charAt(2)) - 1].status =
                    "booked";
            } else if (roomType == "Single Bed") {
                const hotel = await Hotel.findByIdAndUpdate(
                    hotelId,
                    {
                        $set: {
                            "rooms[1].roomInfo[${t}].status ": "booked",
                        },
                    },
                    { arrayFilters: [{ t: Number(roomId.charAt(2)) - 1 }] }
                );
                console.log(hotel);
            } else if (roomType == "Master Suite") {
                hotel.rooms[2].roomInfo[Number(roomId.charAt(2)) - 1].status =
                    "booked";
            } else if (roomType == "Executive Suite") {
                hotel.rooms[3].roomInfo[Number(roomId.charAt(2)) - 1].status =
                    "booked";
            }

            res.status(200).json({ message: "booking completed" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "internal server error" });
    }
};

module.exports.userHistory_get = async (req, res) => {
    const userId = jwt.decode(req.body.token).id;
    console.log(userId);
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
    try {
        const history = await BookingHistory.find({ userID: userId });
        if (history.length) {
            const result = [];
            history.forEach(async (ele) => {
                rowData.Booking_Date = ele.BookingDate;
                rowData.Arrival_Date = ele.BookingDuration.slice(0, 10);
                rowData.Departure_Date = ele.BookingDuration.slice(11);
                (rowData.Duration = getDuration(
                    ele.BookingDuration.slice(0, 10),
                    ele.BookingDuration.slice(11)
                )),
                    (rowData.Hotel_Name = ele.hotelName);
                rowData.City_Name = ele.City;
                rowData.Room_Type = getRoomType(ele.roomId);
                rowData.No_Of_Persons = ele.NoOfPersson;
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

function getDuration(Arrival_Date, Departure_Date) {
    Arrival_Date = convertDateFormat(Arrival_Date);
    Departure_Date = convertDateFormat(Departure_Date);
    const dur = Math.round(
        (new Date(Departure_Date) - new Date(Arrival_Date)) /
            (1000 * 60 * 60 * 24)
    );
    return dur;
}

function getRoomType(id) {
    id = id.slice(0, 2);
    if (id == "SB") {
        return "Single Bed";
    } else if (id == "DB") {
        return "Double Bed";
    } else if (id == "MS") {
        return "Master Suite";
    } else if (id == "ES") {
        return "Executive suite";
    }
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
