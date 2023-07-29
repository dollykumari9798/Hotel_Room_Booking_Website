import "../assets/style/ListContainer.css";
import HotelCard from "./HotelCard";
import { PropTypes } from "prop-types";

export default function ListCotainer({ hotels }) {
    // console.log(hotels);
    return (
        <div className="ListCotainer">
            <div className="HotelCardContainer">
                {hotels.map((ele) => {
                    // console.log(ele.id);

                    return (
                        <HotelCard
                            key={ele.id}
                            id={ele.id}
                            name={ele.name}
                            rating={ele.rating}
                            location={ele.location}
                            avg={ele.avg}
                            features={ele.features}
                        />
                    );
                })}
            </div>
        </div>
    );
}

ListCotainer.propTypes = {
    hotels: PropTypes.array,
};
