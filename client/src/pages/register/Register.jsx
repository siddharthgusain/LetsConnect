import './register.css';

export default function Register() {
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
                    <input placeholder="Username" className="loginInput"/>
                        <input placeholder="Email" type="email" className="loginInput"/>
                        <input placeholder="Password" type="password" className="loginInput"/>
                        <input placeholder="Re-enter password" type="password" className="loginInput"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>   
        </div>
    )
}
