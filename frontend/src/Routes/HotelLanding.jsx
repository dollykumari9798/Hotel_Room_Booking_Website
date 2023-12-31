import '../assets/style/HotelLanding.css'
import Footer from '../componenets/Footer'
import HotelCarousel from '../componenets/hotelCarousel/HotelCarousel'
import HotelDesc from '../componenets/HotelDesc'
import Navbar from '../componenets/Navbar'
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import BASE_URL from '../API_Config'

export default function HotelLanding({bookRoom,setBookRoom}) {
  const [searchParams] = useSearchParams();
    const [hotelName, setHotelName] = useState('');

    async function getHotelDetails(id) {
        try {
            const response = await axios.get(`${BASE_URL}/hotel/`, {
                params: {
                    id: id,
                },
            });
            setHotelName(response.data.name);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(()=>{
        getHotelDetails(searchParams.get("id"));
    },[]);

  return (
    <>
        <Navbar/>
        <HotelCarousel name={hotelName}/>
        <HotelDesc bookRoom={bookRoom} setBookRoom={setBookRoom}/>
        <Footer/>
    </>
  )
}
HotelLanding.propTypes = {
    setBookRoom: PropTypes.func,
    bookRoom:PropTypes.object,
};
