import green from "../assets/img/green.jpg";
import { PropTypes } from "prop-types";
import axios from "axios";

export default function Header2({ city, setCity, setHotels }) {
    async function handleSearch() {
        try {
            // const response = await axios.get("https://hotelbookingfrontend.onrender.com/hotel/all",{
                    const response = await axios.get('http://localhost:5000/hotel/all', {
                    params: {
                        city: city,
                    },
                }
            );
            if (response.data) {
                // console.log(response.data);
                setHotels(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
        console.log("hii");
    }

    return (
        <div className="photo">
            <div className="imgcontainer">
                <img src={green} alt="" />
            </div>
            <div className="SearchBar">
                <div className="searchCityParent">
                    <input
                        type="text"
                        placeholder="Search hotel from ..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    );
}

Header2.propTypes = {
    city: PropTypes.string,
    setCity: PropTypes.func,
    setHotels: PropTypes.func,
};

Header2.defaultProps = {
    city: "",
};
