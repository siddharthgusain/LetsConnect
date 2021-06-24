import { useRef } from 'react';
import './login.css';

export default function Login() {

    const email = useRef();
    const password = useRef();

    const handleClick = (e) =>{
        e.preventDefault();
        console.log( email.current.value );
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">LetsConnect</h3>
                    <span className="loginDesc">
                        Start your journey and meet people around you.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit = { handleClick }>
                        <input placeholder="Enter your Email" 
                                type="email"
                                ref = { email }
                                required
                                className="loginInput"/>
                        <input placeholder="Enter your Password" 
                                type="password" 
                                ref = { password }
                                required
                                minLength = "6"
                                className="loginInput"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new Account</button>
                    </form>
                </div>
            </div>   
        </div>
    )
}
