// import { useSearchParams } from "react-router-dom";
import "../assets/style/bookingForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    async function handleCheckout(e) {
        e.preventDefault();
        setTotal(formData.totalPrice);
        console.log(formData);
        try {
            const response = await axios.post(
                "http://localhost:5000/user/bookhotel",
                formData
            );
            if (response.data.error) {
                console.log(response.data.error);
            }
            if (response.data.token) {
                console.log(response.data.token);
                // localStorage.setItem("jwtToken", response.data.token);
                navigate("/user/history");
            }
        } catch (error) {
            // Handle login error here
            console.error("Login failed:", error.message);
        }
    }

    async function getUserDetails(tokenID) {
        try {
            const response = await axios.get(
                "http://localhost:5000/user/profile",
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
            const response = await axios.get("http://localhost:5000/hotel/", {
                params: {
                    id: id,
                },
            });
            setHotelData(response.data);
            setFormData({
                ...formData,
                hotelId: response.data._id,
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
        // setFormData({
        //     ...formData,
        //     userId:token,
        // });
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
