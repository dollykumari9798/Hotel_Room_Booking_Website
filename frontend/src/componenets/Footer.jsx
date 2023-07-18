import "../assets/style/footer.css";
import travel from "../assets/img/travel.png";
import { BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footerContent">
                    <div className="footer-logo">
                        <img src={travel} alt="Website Logo" />
                    </div>
                    <div className="footer-description">
                        <p>
                            Welcome to our hotel booking website. Discover the
                            perfect accommodations for your next trip!
                        </p>
                    </div>
                </div>
                <nav className="footer-links">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Rooms</a>
                        </li>
                        <li>
                            <a href="#">Reservations</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="social-media-icons">
                    <a href="#">
                        <BsFacebook />
                    </a>
                    <a href="#">
                        <BsInstagram />
                    </a>
                    <a href="#">
                        <BsTwitter />
                    </a>
                    <a href="#">
                        <BsLinkedin />
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <p>
                    &copy; 2023 Your Hotel Booking Website. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
