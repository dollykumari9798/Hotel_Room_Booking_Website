import '../assets/style/signup.css';
import signUp from '../assets/img/signUp.svg';

export default function Signup() {
    return (
        <div className="Signup">
            <div className="dropbox-content flex max-w-xl mx-auto">
                <div className="dropbox-content__img flex items-center justify-center w-half">
                    <img
                        src={signUp}
                        alt="Login Image"
                    />
                </div>
                <div className="dropbox-content__form w-half">
                    <form className="flex flex-col">
                        <div className="flex form__header justify-between">
                            <h5 className='heading'>Sign UP</h5>
                        </div>
                        <div className="flex flex-col form__input-group">
                            <input
                                type="text"
                                className="form__input form__input--email"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                className="form__input form__input--email"
                                placeholder="Email"
                            />
                            <input
                                type="number"
                                className="form__input form__input--email"
                                placeholder="Phone Number"
                            />
                            <input
                                type="password"
                                className="form__input form__input--password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex form__submit items-center justify-between">
                            <button className="form__btn-submit">
                                Sign up
                            </button>
                        </div>
                        <a href="#" className="form__forgot">
                            login with existing one
                        </a>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
