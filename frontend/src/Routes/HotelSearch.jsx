// import '../assets/style'
import Header2 from "../componenets/Header2";
import HotelList from "../componenets/HotelList";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HotelSearch() {
    const [searchParams] = useSearchParams();
    const [city, setCity] = useState("");
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        setCity(searchParams.get("cityName"));
    }, []);

    return (
        <>
            <Navbar />
            <Header2 city={city} setCity={setCity} setHotels={setHotels}/>
            <HotelList hotels={hotels}/>
            <Footer />
        </>
    );
}
