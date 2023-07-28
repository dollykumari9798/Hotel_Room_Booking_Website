import "../assets/style/hotelList.css";
import CarDriving from "../assets/img/CarDriving.gif";
import FilterPannel from "./FilterPannel";
import ListCotainer from "./ListCotainer";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

export default function HotelList({hotels}) {
    // const [cityName, setCityName] = useState('');
    const [filter, setFiler] =useState({
        features:[],
        priceRange:[],
        reviews:1,
    })

    useEffect(()=>{
        
    },[filter])

    return (
        <div className="HotelListParent">
            {!hotels.length && <img src={CarDriving} alt="" />}
            {hotels.length && (
                <>
                    <FilterPannel setFiler={setFiler}/>
                    <ListCotainer hotels={hotels} />
                </>
            )}
        </div>
    );
}

HotelList.propTypes = {
    city: PropTypes.string,
    hotels: PropTypes.array,
};
