import { useState } from "react";
import "../assets/style/login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import loginBg from '../assets/img/loginBg.svg'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 
    const handleLogin = async () => {
        try {
            const response = await axios.post("https://hotelbookingfrontend.onrender.com/login", {
            // const response = await axios.post("http://localhost:5000/login", {
                email: email,
                password: password,
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
        <div className="loginParent">
            <div className="content">
                <div className="content-left">
                    <div className="form-wrapper">
                        <h1 className="text-title heading">Log In</h1>
                        <div>
                            Need an account?
                            <a href="#register">Create an account</a>
                        </div>

                        <div className="field-group">
                            <label className="label" htmlFor="txt-email">
                                Email
                            </label>
                            <input
                                className="input"
                                type="text"
                                id="txt-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                            />
                        </div>
                        <div className="field-group">
                            <div className="label-wrapper">
                                <label className="label" htmlFor="txt-password">
                                    Password
                                </label>
                                {/* <label
                                    className="label label--right"
                                    // onclick="tooglePassword()"
                                >
                                    <svg
                                        className="label-icon eye is--show"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        //   stroke-width="2"
                                        //   stroke-linecap="round"
                                        //   stroke-linejoin="round"
                                        //   className="feather feather-eye"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <svg
                                        className="label-icon eye-off is--hide"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        //   stroke-width="2"
                                        //   stroke-linecap="round"
                                        //   stroke-linejoin="round"
                                        //   className="feather feather-eye-off"
                                    >
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line
                                            x1="1"
                                            y1="1"
                                            x2="23"
                                            y2="23"
                                        ></line>
                                    </svg>
                                    <span className="label-text">Show</span>
                                </label> */}
                            </div>
                            <input
                                className="input"
                                type="password"
                                id="txt-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                            />
                        </div>

                        <div className="field-group">
                            <input
                                className="btn-submit"
                                type="submit"
                                value="Log In"
                                onClick={handleLogin}
                            />
                        </div>

                        {/* <div className="field-group">
                            <label className="checkbox-label">
                                Keep me logged in
                                <input type="checkbox" />
                                <span className="checkbox-checkmark"></span>
                            </label>
                        </div>

                        <div className="field-group text-center">
                            <a href="#forgot-username">Forgot username?</a>
                            <span> · </span>
                            <a href="#forgot-password">Forgot password?</a>
                        </div> */}
                    </div>
                </div>
                <div className="content-right">
                    <div className="content-right-text">
                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </h2>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Culpa eos esse debitis consectetur dolor
                            facilis molestiae, maiores itaque. Quod cupiditate
                            accusamus ab. Repellat inventore sunt culpa possimus
                            alias dignissimos adipisci.
                        </span>
                    </div>
                    <a className="link-custom-domain">
                        {" "}
                        Lorem ipsum dolor sit amet{" "}
                    </a>
                </div>
            </div>
        </div>
    );
}
