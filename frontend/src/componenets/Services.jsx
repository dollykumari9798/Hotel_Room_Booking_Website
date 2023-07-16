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
                    <div className="cardTitle">Card1</div>
                    <div className="cardPara"></div>
                </div>
            </div>
            <div className="card">
                <img src={services} alt="" />
                <div className="cardContent">
                    <div className="cardTitle">Card1</div>
                    <div className="cardPara"></div>
                </div>
            </div>
            <div className="card">
                <img src={services} alt="" />
                <div className="cardContent">
                    <div className="cardTitle">Card1</div>
                    <div className="cardPara"></div>
                </div>
            </div>
            <div className="card">
                <img src={services} alt="" />
                <div className="cardContent">
                    <div className="cardTitle">Card1</div>
                    <div className="cardPara"></div>
                </div>
            </div>
            <div className="card">
                <img src={services} alt="" />
                <div className="cardContent">
                    <div className="cardTitle">Card1</div>
                    <div className="cardPara"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
