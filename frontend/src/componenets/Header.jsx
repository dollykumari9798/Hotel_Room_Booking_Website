import "../assets/style/header.css";
import green from '../assets/img/green.jpg'

export default function Header() {
  return (
    <div className="photo">
      <div className="imgcontainer">
        <img src={green} alt =""/>
      </div>
      <div className="content">
        <h1> Amazing Gateways</h1>
        <h4>
          A rich Group handpicked hotels for a break from chaos .<br></br>Explore Our
          Collection in one of the most delightful cities in India
        </h4>
      </div>
    </div>
  );
}
