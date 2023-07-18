import Navbar from "./componenets/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import HotelSearch from "./Routes/HotelSearch";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/hotels" element={<HotelSearch/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
