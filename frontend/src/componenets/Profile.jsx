import dummyUser from "../assets/img/dummyUser.png";
import "../assets/style/UserProfile.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../API_Config";

export default function Profile() {
    const [userData, setUserData] = useState({});
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mob, setMob] = useState("");
    const [Address, setAddress] = useState("");
    const [Country, setCountry] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(
        localStorage.jwtToken ? true : false
    );

    async function handleUpdate() {
        try {
            const response = await axios.post(
                `${BASE_URL}/user/profile`,
                {
                    token: localStorage.getItem("jwtToken"),
                    name:Name,
                    email:Email,
                    mob:Mob,
                    address:Address,
                    country:Country,
                }
            );
            setUserData(response)
            console.log(response);
        } catch (err) {
            console.log(err.message);
        }
    }

    function handleLogout() {
        localStorage.removeItem("jwtToken");
        setLoggedIn(false);
    }

    async function getUserDetails(tokenID) {
        try {
            const response = await axios.get(
                // "https://hotelbookingfrontend.onrender.com/user/profile",
                "http://localhost:5000/user/profile",
                {
                    params: {
                        token: tokenID,
                    },
                }
            );
            setUserData(response.data);
            setName(response.data.name)
            setMob(response.data.mob)
            setEmail(response.data.email)
            setCountry(response.data.country)
            setAddress(response.data.address)
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        // const token = ;
        getUserDetails(localStorage.getItem("jwtToken"));
    }, []);

    return (
        <div className="ProfileParent">
            <div className="UserImg">
                <img src={dummyUser} alt="" />
            </div>
            <div className="userDetails">
                <div className="UserName">
                    <label htmlFor="Name">Name</label>
                    <input
                        type="text"
                        name="Name"
                        placeholder="Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="UserEmail">
                    <label htmlFor="Email">Email</label>
                    <input
                        type="text"
                        name="Email"
                        placeholder="Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="userPhone">
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <input
                        type="number"
                        name="PhoneNumber"
                        placeholder="Phone Number"
                        value={Mob}
                        onChange={(e) => setMob(e.target.value)}
                    />
                </div>
                <div className="userAddress">
                    <label htmlFor="Address">Address</label>
                    <textarea
                        name="Address"
                        placeholder="Address"
                        rows="5"
                        style={{ resize: "none" }}
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                </div>
                <div className="userCountry">
                    <label htmlFor="Country">Country</label>
                    <input
                        type="text"
                        name="Country"
                        placeholder="Country"
                        value={Country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div className="logOut">
                    <Link to="/">
                        <button onClick={handleLogout}>Logout</button>
                    </Link>
                    <Link>
                        <button className="edit" onClick={handleUpdate}>
                            Update
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
