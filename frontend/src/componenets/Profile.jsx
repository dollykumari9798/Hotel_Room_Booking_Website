import dummyUser from "../assets/img/dummyUser.png";
import "../assets/style/UserProfile.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
    const [userData, setUserData] = useState({});
    const [isLoggedIn, setLoggedIn] = useState(
        localStorage.jwtToken ? true : false
    );

    function handleLogout() {
        localStorage.removeItem("jwtToken");
        setLoggedIn(false);
    }

    async function getUserDetails(tokenID) {
        try {
            const response = await axios.get(
                "http://localhost:5000/user/profile",
                {
                    params: {
                        token: tokenID,
                    },
                }
            );
            setUserData(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(()=>{        
        const token = localStorage.getItem("jwtToken");
        getUserDetails(token);
    },[])

    return (
        <div className="ProfileParent">
            <div className="UserImg">
                <img src={dummyUser} alt="" />
            </div>
            <div className="userDetails">
                <div className="UserName">
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" placeholder="Name" value={userData.name}/>
                </div>
                <div className="UserEmail">
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" placeholder="Email" value={userData.email} />
                </div>
                <div className="userPhone">
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <input
                        type="number"
                        name="PhoneNumber"
                        placeholder="Phone Number"
                        value={userData.mob}
                    />
                </div>
                <div className="userAddress">
                    <label htmlFor="Address">Address</label>
                    <textarea
                        name="Address"
                        placeholder="Address"
                        rows="5"
                        style={{ resize: "none" }}
                        value={userData.address}
                    ></textarea>
                </div>
                <div className="userCountry">
                    <label htmlFor="Country">Country</label>
                    <input type="text" name="Country" placeholder="Country" value={userData.country} />
                </div>
                <div className="logOut">
                    <Link to="/">
                        <button onClick={handleLogout}>Logout</button>
                    </Link>
                    <Link><button className="edit">Update</button></Link>
                </div>
            </div>
        </div>
    );
}
