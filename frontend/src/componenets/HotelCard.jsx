import { BsFillStarFill } from "react-icons/bs";
import HotelCardCarousel from "./HotelCardCarousel";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export default function HotelCard({
    name,
    id,
    rating,
    location,
    avg,
    features,
}) {

    return (
        <div className="HotelCard">
            <div className="carousel">
                <HotelCardCarousel />
            </div>
            <div className="hotelCardContent">
                <div className="hotelCardTitle">
                    <span>{name}</span>
                    <div>
                        <span>{rating} </span>
                        <span>
                            <BsFillStarFill />
                        </span>
                    </div>
                </div>
                <div className="hotelAddress">{location}</div>
                <div className="cardBottom">
                    <div className="avgPrice">
                        <span>Avg. </span>
                        <div className="avgLow">
                            <span>₹ {avg}</span>
                            <span>/ night</span>
                        </div>
                    </div>
                    <Link to={`/hotel?id=${id}`}>
                        <div className="viewHotelBtn">View Hotels</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

HotelCard.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    rating: PropTypes.number,
    location: PropTypes.string,
    avg: PropTypes.string,
    features: PropTypes.array,
};
