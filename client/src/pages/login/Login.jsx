import { useContext , useRef } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

export default function Login() {

    const email = useRef();
    const password = useRef();
    const { user , isFetching , error , dispatch } = useContext(AuthContext);

    const handleClick = (e) =>{
        e.preventDefault();
        loginCall({email: email.current.value , password : password.current.value },
             dispatch);
    };

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <img src={PF + "app_icon.png"} className="loginImg" alt="" />
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
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            { isFetching ? <CircularProgress color="inherit" size="30px" /> 
                            : "Log In" }
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                       { isFetching ? <CircularProgress color="inherit" size="30px" /> 
                                    : "Create a new account" }
                        </button>
                    </form>
                </div>
            </div>   
        </div>
    )
}
