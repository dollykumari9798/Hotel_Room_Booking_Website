import '../assets/style/HotelLanding.css'
import Footer from '../componenets/Footer'
import HotelCarousel from '../componenets/hotelCarousel/HotelCarousel'
import HotelDesc from '../componenets/HotelDesc'
import Navbar from '../componenets/Navbar'

export default function HotelLanding() {
  return (
    <>
        <Navbar/>
        <HotelCarousel/>
        <HotelDesc/>
        <Footer/>
    </>
  )
}
