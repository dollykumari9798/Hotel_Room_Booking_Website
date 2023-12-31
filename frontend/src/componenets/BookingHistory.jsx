import { useEffect, useState } from "react";
import "../assets/style/BookingHistory.css";
import axios from "axios";
import BASE_URL from "../API_Config";

export default function BookingHistory() {
    const [result, setResult] = useState([]);
    async function getUserDetails(tokenID) {
        try {
            const response = await axios.get(
                `${BASE_URL}/user/history`,
                {
                    params: {
                        token: tokenID,
                    },
                }
            );
            setResult(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }
    function refresh(){
        getUserDetails(localStorage.getItem("jwtToken"));
        // console.log(result);
    }
    useEffect(() => {
        getUserDetails(localStorage.getItem("jwtToken"));
    }, []);
    return (
        <div className="BookingHistory">
            <h1 className="heading">Booking Page</h1>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Booking Date</th>
                            <th>Arrival Date</th>
                            <th>Departure Date</th>
                            <th>Duration</th>
                            <th>Hotel Name</th>
                            {/* <th>City Name</th> */}
                            <th>Room Type</th>
                            {/* <th>No. Of Persons</th> */}
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((ele, index) => {
                            <tr key={index}>
                                <td>
                                    <span>{ele.Booking_Date}</span>
                                </td>
                                <td>{ele.Arrival_Date}</td>
                                <td>{ele.Departure_Date}</td>
                                <td>{ele.Duration}</td>
                                <td>{ele.Hotel_Name}</td>
                                <td>{ele.Room_Type}</td>
                                <td>{ele.Total_Price}</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </div>
            <button>Print</button>
            <button onClick={refresh}>Refresh</button>
        </div>
    );
}
