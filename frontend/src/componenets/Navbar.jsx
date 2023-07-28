import "../assets/style/nav.css";
import travel from "../assets/img/travel.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isLoggedIn, setLoggedIn] = useState(
        localStorage.jwtToken ? true : false
    );

    function handleLogout() {
        localStorage.removeItem("jwtToken");
        setLoggedIn(false);
    }

    return (
        <div className="nav">
            <div className="logo">
                <img src={travel} alt="" />{" "}
            </div>
            <div className="menu">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    {isLoggedIn && (
                        <li className="dropdown">
                            <button className="dropbtn">Menu</button>
                            <div className="dropdown-content">
                                <Link to="/user/profile">Profile</Link>
                                <Link to="/" onClick={handleLogout}>
                                    Logout
                                </Link>
                            </div>
                        </li>
                    )}
                    {!isLoggedIn && (
                        <Link to="/login">
                            <li className="log">Login</li>
                        </Link>
                    )}
                    {!isLoggedIn && (
                        <Link to="/signup">
                            <li className="sign">Signup</li>
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    );
}
