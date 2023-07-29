// import { useSearchParams } from "react-router-dom";
import "../assets/style/bookingForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";

export default function BookingForm({ bookRoom }) {
    const [userData, setUserData] = useState({});
    const [hotelData, setHotelData] = useState({});
    const [total, setTotal] = useState(0);
    const [noRoom, setNoRoom] = useState(0);
    const [formData, setFormData] = useState({
        hotelId: "",
        name: "",
        email: "",
        mob: "",
        hotelName: "",
        roomType: "",
        arrivalDate: "",
        departureDate: "",
        avgPrice: "",
        totalPrice: 0,
        nRooms: 0,
    });

    async function handleCheckout(e) {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://hotelbookingfrontend.onrender.com/payment/checkout",
                // "http://localhost:5000/payment/checkout",
                {
                    amount: total,
                }
            );
            // console.log(response.data);

            const bookedRes = await axios.post(
                "https://hotelbookingfrontend.onrender.com/user/bookhotel",
                // "http://localhost:5000/user/bookhotel",
                formData
            );

            const options = {
                key: "rzp_test_6K41LeLgTOJFWd", // Enter the Key ID generated from the Dashboard
                amount: response.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "Dolly Kumari",
                description: "Hotel Booking Payment",
                image: "https://avatars.githubusercontent.com/u/89187472?v=4",
                order_id: response.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                callback_url: "https://hotelbookingfrontend.onrender.com/payment/verification",
                // callback_url: "http://localhost:5000/payment/verification",
                prefill: {
                    name: userData.name,
                    email: userData.email,
                    contact: userData.mob,
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
            alert(bookedRes.data.token);
        } catch (err) {
            console.log(err.message);
        }

        setTotal(formData.totalPrice);
        console.log(formData);
    }

    async function getUserDetails(tokenID) {
        try {
            const response = await axios.get(
                "https://hotelbookingfrontend.onrender.com/user/profile",
                // "http://localhost:5000/user/profile",
                {
                    params: {
                        token: tokenID,
                    },
                }
            );
            setUserData(response.data);
            setFormData({
                ...formData,
                name: response.data.name,
                email: response.data.email,
                mob: response.data.mob,
            });
        } catch (err) {
            console.log(err.message);
        }
    }
    async function getHotelDetails(id) {
        try {
            const response = await axios.get("https://hotelbookingfrontend.onrender.com/hotel/", {
            // const response = await axios.get("http://localhost:5000/hotel/", {
                params: {
                    id: id,
                },
            });
            setHotelData(response.data);
            // console.log(response.data)
            setFormData({
                ...formData,
                // hotelId: response.data._id,
                hotelName: response.data.name,
            });
            // console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }
    function calcPrice() {
        console.log(noRoom * parseInt(formData.avgPrice));
        return noRoom * Number(formData.avgPrice);
    }
    setTimeout(() => {
        setFormData({
            ...formData,
            hotelId:bookRoom.hotelId,
            name: userData.name,
            email: userData.email,
            mob: userData.mob,
            hotelName: hotelData.name,
            roomType: bookRoom.roomType,
            arrivalDate: bookRoom.arrivalDate,
            departureDate: bookRoom.departureDate,
            avgPrice: bookRoom.avgPrice,
            // totalPrice: calcPrice(),
        });
    }, 5000);
    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        setFormData({
            ...formData,
            hotelId:bookRoom.hotelId,
        });
        getUserDetails(token);
        getHotelDetails(bookRoom.hotelId);
    }, []);

    return (
        <div className="Booking FormParent">
            <h1 className="heading">Booking Page</h1>
            <form>
                <div className="inputParent">
                    <label htmlFor="Name">Name</label>
                    <input
                        type="text"
                        name="Name"
                        placeholder="Name"
                        value={userData.name}
                        readOnly
                    />
                </div>
                <div className="inputParent">
                    <label htmlFor="Email">Email</label>
                    <input
                        type="text"
                        name="Email"
                        placeholder="Email"
                        value={userData.email}
                        readOnly
                    />
                </div>
                <div className="inputParent">
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <input
                        type="number"
                        name="PhoneNumber"
                        placeholder="Phone Number"
                        readOnly
                        value={userData.mob}
                    />
                </div>
                <div className="inputParent">
                    <label htmlFor="HotelName">Hotel Name</label>
                    <input
                        type="text"
                        name="HotelName"
                        placeholder="Hotel Name"
                        readOnly
                        value={hotelData.name}
                    />
                </div>
                <div className="inputParent">
                    <label htmlFor="RoomType">Room Type</label>
                    <input
                        type="text"
                        name="HotelName"
                        placeholder="Hotel Name"
                        readOnly
                        value={bookRoom.roomType}
                    />
                </div>
                <div className="inputParent">
                    <label htmlFor="Arrival">Arrival Date</label>
                    <input
                        type="date"
                        name="Arrival"
                        placeholder="Arrival"
                        value={bookRoom.arrivalDate}
                    />
                </div>
                <div className="inputParent">
                    <label htmlFor="Departure">Departure Date</label>
                    <input
                        type="date"
                        name="Departure"
                        placeholder="Departure"
                        value={bookRoom.departureDate}
                    />
                </div>
                <div className="inputParent">
                    <label htmlFor="RoomNo">Number Of Rooms</label>
                    <input
                        type="number"
                        name="RoomNo"
                        placeholder="Number Of Rooms"
                        value={noRoom}
                        onChange={(e) => {
                            setNoRoom(e.target.value);
                            setFormData({
                                ...formData,
                                nRooms: e.target.value,
                            });
                        }}
                    />
                </div>
                <div className="billSample">
                    <div className="AvgPriceOFRoom">
                        <span>Avg. Price Of Room: </span>
                        <span>₹ {bookRoom.avgPrice} </span>
                    </div>
                    <div className="TotalPrice">
                        <span>Total Price: </span>
                        <span>₹ {total} </span>
                        <span>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setTotal(calcPrice());
                                    setFormData({
                                        ...formData,
                                        totalPrice: calcPrice(),
                                    });
                                }}
                            >
                                Calculate
                            </button>
                        </span>
                    </div>
                </div>
                <button onClick={(e) => handleCheckout(e)} className="cnfBtn">
                    Confirm Booking
                </button>
            </form>
        </div>
    );
}
BookingForm.propTypes = {
    bookRoom: PropTypes.object,
};
