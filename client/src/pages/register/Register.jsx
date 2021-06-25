import './register.css';
import { useRef } from 'react';

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    
    const handleClick = (e) => {
        e.preventDefault();

    }


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">LetsConnect</h3>
                    <span className="loginDesc">
                        Start Your Journey and meet people around you.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <input placeholder="Username" required ref={ username } className="loginInput"/>
                        <input placeholder="Email" required ref ={ email } type="email" className="loginInput"/>
                        <input placeholder="Password" required ref={ password } type="password" className="loginInput"/>
                        <input placeholder="Re-enter password" required ref= { passwordAgain } type="password" className="loginInput"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>   
        </div>
    )
}
