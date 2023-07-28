import dummyUser from "../assets/img/dummyUser.png";
import "../assets/style/UserProfile.css";

export default function Profile() {
    return (
        <div className="ProfileParent">
            <div className="UserImg">
                <img src={dummyUser} alt="" />
            </div>
            <div className="userDetails">
                <div className="UserName">
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" placeholder="Name" />
                    <button className="edit">Edit</button>
                </div>
                <div className="UserEmail">
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" placeholder="Email" />
                    <button className="edit">Edit</button>
                </div>
                <div className="userPhone">
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <input
                        type="number"
                        name="PhoneNumber"
                        placeholder="Phone Number"
                    />
                    <button className="edit">Edit</button>
                </div>
                <div className="userAddress">
                    <label htmlFor="Address">Address</label>
                    <textarea
                        name="Address"
                        placeholder="Address"
                        rows="5"
                        style={{resize:'none'}}
                    ></textarea>
                    <button className="edit">Edit</button>
                </div>
                <div className="userCountry">
                    <label htmlFor="Country">Country</label>
                    <input type="text" name="Country" placeholder="Country" />
                    <button className="edit">Edit</button>
                </div>
                <div className="logOut">
                    <button>Logout</button>
                </div>
            </div>
        </div>
    );
}
