import { useSearchParams } from "react-router-dom";
import "../assets/style/bookingForm.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BookingForm() {
    const [userData, setUserData] = useState({});
    const [hotelData, setHotelData] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mob: "",
        hotelName: "",
        roomType: "",
        arrivalDate: "",
        departureDate: "",
        noRooms: 0,
        noNights: "",
        avgPrice: "",
        totalPrice: "",
    });
    const [searchParams] = useSearchParams();

    function handleChange(e) {
        const field = e.target.name;
        if (field === "RoomType") {
            setFormData({ ...formData, roomType: e.target.value });
        }
        // else if(field === 'Arrival'){
        //     setFormData({...formData,arrivalDate:e.target.value})
        // }
        console.log(formData);
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
        } catch (err) {
            console.log(err.message);
        }
    }
    async function getHotelDetails(id) {
        // console.log(id);
        try {
            const response = await axios.get("http://localhost:5000/hotel/", {
                params: {
                    id: id,
                },
            });
            setHotelData(response.data);
            // console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        getUserDetails(token);
        getHotelDetails(searchParams.get("id"));
        setTimeout(()=>{
          setFormData({
            ...formData,
            name: userData.name,
            email: userData.email,
            mob: userData.mob,
            hotelName: hotelData.name,
        });  
        },5000)
        
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
                    <select
                        name="RoomType"
                        id="RoomType"
                        onChange={(e) => handleChange(e)}
                    >
                        {hotelData.data?.map((ele) => {
                            return (
                                <option key={ele.type} value={ele.type}>
                                    {ele.title}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="inputParent">
                    <label htmlFor="Arrival">Arrival Date</label>
                    <input
                        type="date"
                        name="Arrival"
                        placeholder="Arrival"
                        // value={formData.arrivalDate}
                        // onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="inputParent">
                    <label htmlFor="Departure">Departure Date</label>
                    <input
                        type="date"
                        name="Departure"
                        placeholder="Departure"
                    />
                </div>
                <div className="inputParent">
                    <label htmlFor="RoomNo">Number Of Rooms</label>
                    <input
                        type="number"
                        name="RoomNo"
                        placeholder="Number Of Rooms"
                    />
                </div>
                <div className="billSample">
                    <div className="TotalNoOfNights">
                        <span>Total No Of Nights: </span>
                        <span>2</span>
                    </div>
                    <div className="AvgPriceOFRoom">
                        <span>Avg. Price Of Room: </span>
                        <span>₹ 5000 /night</span>
                    </div>
                    <div className="TotalPrice">
                        <span>Total Price: </span>
                        <span>₹ 5000 </span>
                    </div>
                </div>
                <button className="cnfBtn">Confirm Booking</button>
            </form>
        </div>
    );
}
