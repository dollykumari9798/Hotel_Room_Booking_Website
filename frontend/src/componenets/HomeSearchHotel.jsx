import "../assets/style/homesearch.css";
import vacation from "../assets/img/VacationSelfie.png";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function HomeSearchHotel() {
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    const searchCity = () => {
        navigate({
            pathname: "/hotels",
            search: createSearchParams({
              cityName: city,
            }).toString(),
        });
    };

    return (
        <div className="HomeSearchHotel">
            <div className="searchPannel">
                <input
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                {/* <Link to={`/hotels:${city}`}> */}
                    <button onClick={searchCity}>Search Hotels</button>
                {/* </Link> */}
            </div>
            <div className="imgContainer">
                <img src={vacation} alt="" />
            </div>
        </div>
    );
}
