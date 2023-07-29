import BookingForm from "../componenets/BookingForm";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";


export default function BookRoom({bookRoom}) {
  return (
    <>
        <Navbar/>
        <BookingForm bookRoom={bookRoom}/>
        <Footer/>
    </>
  )
}
