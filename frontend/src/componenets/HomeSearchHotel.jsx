import '../assets/style/homesearch.css';
import vacation from '../assets/img/VacationSelfie.png';

export default function HomeSearchHotel() {
  return (
    <div className='HomeSearchHotel'>
        <div className="searchPannel">
            <input type="text" placeholder='Enter City'/>
            <button>Search Hotels</button>
        </div>
        <div className="imgContainer">
            <img src={vacation} alt="" />
        </div>
    </div>
  )
}
