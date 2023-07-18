import '../assets/style/newsLetter.css';

export default function NewsLetter() {
  return (
    <div className='NewsLetter'>
        <div className="title">Say Hello to Us</div>
        <div className="desc">Subscribe to our newsletter to get updates about our latest offers and most popular tourist destinations</div>
        <div className="inputContainer">
            <input type="text" placeholder='Your Email Id'/>
            <button>SUBSCRIBE</button>
        </div>
    </div>
  )
}
