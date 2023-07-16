import "../assets/style/nav.css";
import travel from '../assets/img/travel.png'

export default function Navbar() {
  return (
    <div className="nav">
      <div className="logo"><img src ={travel} alt = ""/> </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
         <li className="log">Login</li>
         <li className="sign">Signup</li> 

        </ul>
      </div>
    </div>
  );
}
