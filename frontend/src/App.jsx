import Navbar from "./componenets/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Routes/HomePage";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
