import '../assets/style/signup.css';
import signUp from '../assets/img/signUp.svg';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [mob, setMob] = useState("");
    const navigate = useNavigate(); 
    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/signup", {
                email: email,
                password: password,
                name : name,
                mob : mob,
            });
            if (response.data.error) {
                console.log(response.data.error);
            }
            if (response.data.token) {
                localStorage.setItem("jwtToken", response.data.token);
                navigate('/');
            }
        } catch (error) {
            // Handle login error here
            console.error("Login failed:", error.message);
        }
    };
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
                                className="form_input form_input--email"
                                placeholder="Name"
                                value={name} onChange={(e)=>setName(e.target.value)}
                            />
                            <input
                                type="email"
                                className="form_input form_input--email"
                                placeholder="Email"
                                value={email} onChange={(e)=>setEmail(e.target.value)}
                            />
                            <input
                                type="number"
                                className="form_input form_input--email"
                                placeholder="Phone Number"
                                value={mob} onChange={(e)=>setMob(e.target.value)}
                            />
                            <input
                                type="password"
                                className="form_input form_input--password"
                                placeholder="Password"
                                value={password} onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex form__submit items-center justify-between">
                            <button className="form__btn-submit" onClick={handleLogin}>
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