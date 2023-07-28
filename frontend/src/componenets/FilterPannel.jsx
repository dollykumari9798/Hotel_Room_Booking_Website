import MultiRangeSlider from "../componenets/multiRangeSlider/MultiRangeSlider";
import "../assets/style/hotelList.css";
import { BsFillStarFill } from "react-icons/bs";

export default function FilterPannel() {
    return (
        <div className="FilterParent">
            <div className="filterHeading">Filters</div>
            <div className="filterControl">
                <div className="Aminities">
                    <span className="title">Features:</span>
                    <div className="aminityContainer">
                        <div className="aminityItem">
                            <input type="checkbox" name="Pool" id="Pool" />
                            <label htmlFor="Pool">Pool</label>
                        </div>
                        <div className="aminityItem">
                            <input type="checkbox" name="Pool" id="Pool" />
                            <label htmlFor="Pool">Parking</label>
                        </div>
                        <div className="aminityItem">
                            <input type="checkbox" name="Pool" id="Pool" />
                            <label htmlFor="Pool">Private Dine</label>
                        </div>
                        <div className="aminityItem">
                            <input type="checkbox" name="Pool" id="Pool" />
                            <label htmlFor="Pool">Swimming</label>
                        </div>
                        <div className="aminityItem">
                            <input type="checkbox" name="Pool" id="Pool" />
                            <label htmlFor="Pool">Gym</label>
                        </div>
                        <div className="aminityItem">
                            <input type="checkbox" name="Pool" id="Pool" />
                            <label htmlFor="Pool">Restraunt</label>
                        </div>
                    </div>
                </div>
                <div className="PriceRange">
                    <div className="title">Price Range: </div>
                    <MultiRangeSlider
                        min={0}
                        max={1000}
                        onChange={({ min, max }) =>
                            // console.log(`min = ${min}, max = ${max}`)
                            console.log()
                        }
                    />
                </div>
                <div className="Reviews">
                    <div className="title">Reviews: </div>
                    <div className="ReviewContainer">
                        <div className="ReviewCard">
                            <span>1 </span>
                            <span>
                                <BsFillStarFill />
                            </span>
                            <span> & above</span>
                        </div>
                        <div className="ReviewCard">
                            <span>2 </span>
                            <span>
                                <BsFillStarFill />
                            </span>
                            <span> & above</span>
                        </div>
                        <div className="ReviewCard">
                            <span>3 </span>
                            <span>
                                <BsFillStarFill />
                            </span>
                            <span> & above</span>
                        </div>
                        <div className="ReviewCard">
                            <span>4 </span>
                            <span>
                                <BsFillStarFill />
                            </span>
                            <span> & above</span>
                        </div>
                    </div>
                </div>
                <div className="BookingDate">
                    <div className="title">Booking Date:</div>
                    <div className="BookingContainer">
                        <div className="aminityItem">
                            <label htmlFor="CheckIn">CheckIn: </label>
                            <input type="date" name="CheckIn" id="CheckIn" />
                        </div>
                        <div className="aminityItem">
                            <label htmlFor="CheckOut">CheckOut: </label>
                            <input type="date" name="CheckOut" id="CheckOut" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="filterBtns">
                <div className="apply">Apply Filters</div>
                <div className="clear">Clear Filters</div>
            </div>
        </div>
    );
}
