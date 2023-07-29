import '../assets/style/services.css';
import services from '../assets/img/services.png';

export default function Services() {
  return (
    <div className='serviceParent'>
        <div className="heading">Our Services</div>
        <div className="serviceCards">
            <div className="card">
                <img src={services} alt="" />
                <div className="cardContent">
                    <div className="cardTitle">Flight Bookings</div>
                    <div className="cardPara"></div>
                </div>
            </div>
            <div className="card">
                <img src={services} alt="" />
                <div className="cardContent">
                    <div className="cardTitle">Hotel Reservation</div>
                    <div className="cardPara"></div>
                </div>
            </div>
            <div className="card">
                <img src={services} alt="" />
                <div className="cardContent">
                    <div className="cardTitle">Tour Packages</div>
                    <div className="cardPara"></div>
                </div>
            </div>
            <div className="card">
                <img src={services} alt="" />
                <div className="cardContent">
                    <div className="cardTitle">Travel Insurance</div>
                    <div className="cardPara"></div>
                </div>
            </div>
            <div className="card">
                <img src={services} alt="" />
                <div className="cardContent">
                    <div className="cardTitle">Visa and Passport Assistance</div>
                    <div className="cardPara"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
