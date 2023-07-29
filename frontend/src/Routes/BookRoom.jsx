import BookingForm from "../componenets/BookingForm";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";
import { PropTypes } from "prop-types";


export default function BookRoom({bookRoom}) {
  return (
    <>
        <Navbar/>
        <BookingForm bookRoom={bookRoom}/>
        <Footer/>
    </>
  )
}
BookRoom.propTypes = {
  bookRoom: PropTypes.object,
};