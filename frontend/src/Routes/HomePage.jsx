import Header from "../componenets/Header";
import About from "../componenets/About";
import Services from "../componenets/Services";
import Testimonials from "../componenets/Testimonials";
import HomeSearchHotel from "../componenets/HomeSearchHotel";
import NewsLetter from "../componenets/NewsLetter";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";

export default function HomePage() {

    return (
        <>
            <Navbar/>
            <Header />
            <About />
            <Services/>
            <Testimonials/>
            <HomeSearchHotel/>
            <NewsLetter/>
            <Footer/>
        </>
    );
}
