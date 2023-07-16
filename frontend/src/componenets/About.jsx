import vie from "../assets/img/vie.jpg";
import "../assets/style/about.css";
import { IoIosArrowForward } from "react-icons/io";
import cityImage from '../assets/img/cityImage.png';
import tour from '../assets/img/tour.png';
import people from '../assets/img/people.png';

export default function About() {
    return (
        <div className="TxtImg">
            <div className="Text">
                <div className="heading">About DK Travels</div>
                <div className="para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum tempore, cum dolorem, qui,explicabo dolore a
                    aspernatur vero cumque eligendi illum impedit. At, odio vel!
                    Vitae nulla ipsam tempora? Esse.Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Harum tempore, cum dolorem,
                    qui, explicabo dolore a aspernatur vero cumque eligendi
                    illum impedit. At, odio vel! Vitae nulla ipsam tempora?
                    Esse.Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Harum tempore, cum dolorem, qui, explicabo dolore a
                    aspernatur vero cumque eligendi illum impedit. At, odio vel!
                    Vitae nulla ipsam tempora? Esse.
                </div>
                <div className="button">
                    <button>
                        <span>View Hotels</span>
                        <span>
                            <IoIosArrowForward />
                        </span>
                    </button>
                </div>
                <div className="num">
                    <div className="statsParent">
                        <h2 id="one">20+</h2>
                        <img src={cityImage} alt="" />
                    </div>
                    <div className="statsParent">
                        <h2 id="two">120+</h2>
                        <img src={people} alt="" />
                    </div>
                    <div className="statsParent">
                        <h2 id="three">10k+</h2>
                        <img src={tour} alt="" />
                    </div>
                </div>
            </div>
            <div className="img">
                <img src={vie} alt="" />
                <img src={vie} alt="" />
            </div>
        </div>
    );
}
