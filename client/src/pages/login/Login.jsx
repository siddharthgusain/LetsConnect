import './login.css';

export default function Login() {
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
                        <input placeholder="Enter your Email" className="loginInput"/>
                        <input placeholder="Enter your Password" className="loginInput"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new Account</button>
                    </div>
                </div>
            </div>   
        </div>
    )
}
