import "../assets/style/HotelLanding.css";
import doubleBedImg from "../assets/img/doubleBedImg.jpeg";
import { BsFillStarFill } from "react-icons/bs";
import { createBrowserRouter, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

export default function HotelDesc({ bookRoom, setBookRoom }) {
    const [searchParams] = useSearchParams();
    const [hotelData, setHotelData] = useState({});
    const navigate = useNavigate();

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

    function handleRoomBooking(e) {
        const field = e.target.name;
        if (field === "CheckIn") {
            setBookRoom((curBookRoom) => {
                return { ...curBookRoom, arrivalDate: e.target.value };
            });
        } else if (field === "CheckOut") {
            setBookRoom((curBookRoom) => {
                return { ...curBookRoom, departureDate: e.target.value };
            });
        }
    }

    function handleSubmit(e, ele) {
        setBookRoom((curBookRoom) => {
            return {
                ...curBookRoom,
                stayDur: getDuration(
                    curBookRoom.arrivalDate,
                    curBookRoom.departureDate
                ),
            };
        });
        var roomType = ele.target.title;
        var roomPrice = ele.target.price;
        if (roomType === "Single Bed Room") {
            setBookRoom((curBookRoom) => {
                return {
                    ...curBookRoom,
                    roomType: roomType,
                    avgPrice: roomPrice,
                };
            });
        } else if (roomType === "Double Bed Room") {
            setBookRoom((curBookRoom) => {
                return {
                    ...curBookRoom,
                    roomType: roomType,
                    avgPrice: roomPrice,
                };
            });
        } else if (roomType === "Master Suite Room") {
            setBookRoom((curBookRoom) => {
                return {
                    ...curBookRoom,
                    roomType: roomType,
                    avgPrice: roomPrice,
                };
            });
        } else if (roomType === "Executive Suite Room") {
            setBookRoom((curBookRoom) => {
                return {
                    ...curBookRoom,
                    roomType: roomType,
                    avgPrice: roomPrice,
                };
            });
        }
        navigate("/bookroom");
    }

    async function getHotelDetails(id) {
        console.log(id);
        try {
            // const response = await axios.get("https://hotelbookingfrontend.onrender.com/hotel/", {
            const response = await axios.get("http://localhost:5000/hotel/", {
                params: {
                    id: id,
                },
            });

            setHotelData(response.data);
            var token = localStorage.getItem("jwtToken");
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getHotelDetails(searchParams.get("id"));
    }, []);

    return (
        <div className="HotelDesc">
            <div className="heading">{hotelData.name}</div>
            <div className="hotelInfo">{hotelData.desc}</div>
            <div className="hotelFeatures">
                <div className="title">Features </div>
                <div className="featureCards">
                    {hotelData.features?.map((ele) => {
                        return (
                            <div className="featureCard" key={hotelData._id}>
                                {ele}
                            </div>
                        );
                    })}
                    {/* <div className="featureCard">Parking</div>
                    <div className="featureCard">Private Dine</div>
                    <div className="featureCard">Pool</div> */}
                </div>
            </div>
            <div className="hotelRooms">
                <div className="title">Our Rooms</div>
                <div className="roomParents">
                    {hotelData.rooms?.map((ele) => {
                        return (
                            <div className={ele.type} key={ele.type}>
                                <div className="roomImg">
                                    <img src={doubleBedImg} alt="" />
                                </div>
                                <div className="roomDesc">
                                    <div className="roomTitle">{ele.title}</div>
                                    <div className="roomRating">
                                        <span>Avg. Rating: </span>
                                        <div>
                                            <span>{ele.rating} </span>
                                            <span>
                                                <BsFillStarFill />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="roomInfo">{ele.desc}</div>
                                    <div className="BookingDate">
                                        <div className="title">
                                            Booking Date:
                                        </div>
                                        <div className="BookingContainer">
                                            <div className="aminityItem">
                                                <label htmlFor="CheckIn">
                                                    CheckIn:{" "}
                                                </label>
                                                <input
                                                    type="date"
                                                    name="CheckIn"
                                                    id="CheckIn"
                                                    onChange={(e) =>
                                                        handleRoomBooking(e)
                                                    }
                                                />
                                            </div>
                                            <div className="aminityItem">
                                                <label htmlFor="CheckOut">
                                                    CheckOut:{" "}
                                                </label>
                                                <input
                                                    type="date"
                                                    name="CheckOut"
                                                    id="CheckOut"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stayDuration">
                                        <span>No. of nights: </span>
                                        <span>3</span>
                                    </div>
                                    <div className="AvailableRooms">
                                        <span>Available Rooms: </span>
                                        <span>{ele.qty}</span>
                                    </div>
                                    <div className="roomPrice">
                                        <span>Price: </span>
                                        <div className="avgLow">
                                            <span>₹ {ele.price}</span>
                                            <span>/ night</span>
                                        </div>
                                    </div>
                                    <Link to="/bookroom">
                                        <button
                                            onClick={(e) =>
                                                handleSubmit(e, ele)
                                            }
                                        >
                                            Book Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
