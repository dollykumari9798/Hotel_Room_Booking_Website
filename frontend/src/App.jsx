// import Navbar from "./componenets/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import HotelSearch from "./Routes/HotelSearch";
import HotelLanding from "./Routes/HotelLanding";
import BookRoom from "./Routes/BookRoom";
import UserProfile from "./Routes/UserProfile";
import UserHistory from "./Routes/UserHistory";
import Login from "./Routes/Login";
import Signup from "./Routes/Signup";
import { useState } from "react";

function App() {

    const [bookRoom, setBookRoom] = useState({
        hotelId:'',
        arrivalDate:'',
        departureDate:'',
        stayDur:0,
        roomType:'',
        avgPrice:'',
    })

    return (
        <>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/hotels" element={<HotelSearch />} />
                    <Route path="/hotel" element={<HotelLanding setBookRoom={setBookRoom} bookRoom={bookRoom}/>} />
                    <Route path="/bookroom" element={<BookRoom bookRoom={bookRoom}/>} />
                    <Route path="/user/profile" element={<UserProfile />} />
                    <Route path="/user/history" element={<UserHistory />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
