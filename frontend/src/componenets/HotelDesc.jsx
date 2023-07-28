import "../assets/style/HotelLanding.css";
import doubleBedImg from "../assets/img/doubleBedImg.jpeg";
import singleBedImg from "../assets/img/singleBedImg.jpg";
import masterSuiteImg from "../assets/img/masterSuiteImg.webp";
import { BsFillStarFill } from "react-icons/bs";

export default function HotelDesc() {
    return (
        <div className="HotelDesc">
            <div className="heading">Hotel Ursa Major</div>
            <div className="hotelInfo">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium facilis eos, alias debitis dolor nisi tenetur
                officiis ab placeat doloribus omnis commodi, magnam saepe
                reiciendis voluptate beatae, illo quos blanditiis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Illo consectetur,
                rem iure repudiandae ea fugiat, blanditiis, odit ratione sunt
                quos fuga. Hic, labore harum deleniti maxime nemo voluptatem
                adipisci vitae.
            </div>
            <div className="hotelFeatures">
                <div className="title">Features </div>
                <div className="featureCards">
                    <div className="featureCard">Pool</div>
                    <div className="featureCard">Parking</div>
                    <div className="featureCard">Private Dine</div>
                    <div className="featureCard">Pool</div>
                </div>
            </div>
            <div className="hotelRooms">
                <div className="title">Our Rooms</div>
                <div className="roomParents">
                    <div className="doubleBed">
                        <div className="roomImg">
                            <img src={doubleBedImg} alt="" />
                        </div>
                        <div className="roomDesc">
                            <div className="roomTitle">Double Bed Room</div>
                            <div className="roomRating">
                                <span>Avg. Rating: </span>
                                <div>
                                    <span>4 </span>
                                    <span>
                                        <BsFillStarFill />
                                    </span>
                                </div>
                            </div>
                            <div className="roomInfo">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Iusto eos eum expedita aliquam
                                atque ratione unde sed beatae quis impedit. Qui
                                est quia in omnis. Pariatur reprehenderit odio
                                modi doloribus?
                            </div>
                            <div className="BookingDate">
                                <div className="title">Booking Date:</div>
                                <div className="BookingContainer">
                                    <div className="aminityItem">
                                        <label htmlFor="CheckIn">
                                            CheckIn:{" "}
                                        </label>
                                        <input
                                            type="date"
                                            name="CheckIn"
                                            id="CheckIn"
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
                                <span>2</span>
                            </div>
                            <div className="roomPrice">
                                <span>Price: </span>
                                <div className="avgLow">
                                    <span>₹ 5000</span>
                                    <span>/ night</span>
                                </div>
                            </div>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className="doubleBed">
                        <div className="roomImg">
                            <img src={singleBedImg} alt="" />
                        </div>
                        <div className="roomDesc">
                            <div className="roomTitle">Single Bed Room</div>
                            <div className="roomRating">
                                <span>Avg. Rating: </span>
                                <div>
                                    <span>4 </span>
                                    <span>
                                        <BsFillStarFill />
                                    </span>
                                </div>
                            </div>
                            <div className="roomInfo">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Iusto eos eum expedita aliquam
                                atque ratione unde sed beatae quis impedit. Qui
                                est quia in omnis. Pariatur reprehenderit odio
                                modi doloribus?
                            </div>
                            <div className="BookingDate">
                                <div className="title">Booking Date:</div>
                                <div className="BookingContainer">
                                    <div className="aminityItem">
                                        <label htmlFor="CheckIn">
                                            CheckIn:{" "}
                                        </label>
                                        <input
                                            type="date"
                                            name="CheckIn"
                                            id="CheckIn"
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
                                <span>2</span>
                            </div>
                            <div className="roomPrice">
                                <span>Price: </span>
                                <div className="avgLow">
                                    <span>₹ 5000</span>
                                    <span>/ night</span>
                                </div>
                            </div>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className="doubleBed">
                        <div className="roomImg">
                            <img src={masterSuiteImg} alt="" />
                        </div>
                        <div className="roomDesc">
                            <div className="roomTitle">Master Suite Room</div>
                            <div className="roomRating">
                                <span>Avg. Rating: </span>
                                <div>
                                    <span>4 </span>
                                    <span>
                                        <BsFillStarFill />
                                    </span>
                                </div>
                            </div>
                            <div className="roomInfo">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Iusto eos eum expedita aliquam
                                atque ratione unde sed beatae quis impedit. Qui
                                est quia in omnis. Pariatur reprehenderit odio
                                modi doloribus?
                            </div>
                            <div className="BookingDate">
                                <div className="title">Booking Date:</div>
                                <div className="BookingContainer">
                                    <div className="aminityItem">
                                        <label htmlFor="CheckIn">
                                            CheckIn:{" "}
                                        </label>
                                        <input
                                            type="date"
                                            name="CheckIn"
                                            id="CheckIn"
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
                                <span>2</span>
                            </div>
                            <div className="roomPrice">
                                <span>Price: </span>
                                <div className="avgLow">
                                    <span>₹ 5000</span>
                                    <span>/ night</span>
                                </div>
                            </div>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className="doubleBed">
                        <div className="roomImg">
                            <img src={singleBedImg} alt="" />
                        </div>
                        <div className="roomDesc">
                            <div className="roomTitle">
                                Executive Suite Room
                            </div>
                            <div className="roomRating">
                                <span>Avg. Rating: </span>
                                <div>
                                    <span>4 </span>
                                    <span>
                                        <BsFillStarFill />
                                    </span>
                                </div>
                            </div>
                            <div className="roomInfo">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Iusto eos eum expedita aliquam
                                atque ratione unde sed beatae quis impedit. Qui
                                est quia in omnis. Pariatur reprehenderit odio
                                modi doloribus?
                            </div>
                            <div className="BookingDate">
                                <div className="title">Booking Date:</div>
                                <div className="BookingContainer">
                                    <div className="aminityItem">
                                        <label htmlFor="CheckIn">
                                            CheckIn:{" "}
                                        </label>
                                        <input
                                            type="date"
                                            name="CheckIn"
                                            id="CheckIn"
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
                                <span>2</span>
                            </div>
                            <div className="roomPrice">
                                <span>Price: </span>
                                <div className="avgLow">
                                    <span>₹ 5000</span>
                                    <span>/ night</span>
                                </div>
                            </div>
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
