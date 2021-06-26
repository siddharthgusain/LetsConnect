import './register.css';
import { useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';


export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    const handleClick = async (e) => {
        e.preventDefault();

        if(passwordAgain.current.value !== password.current.value ){
            passwordAgain.current.setCustomValidity("Passwords don't match!");

        }else{
            const user = {
                username : username.current.value,
                email : email.current.value,
                password : password.current.value,
            };

            try{
                 
                await axios.post("/auth/register",user);
                history.push("/login");

            }catch(err){
                console.log(err);
            }
            
        }
    };


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <img src={PF + "app_icon.png"} className="loginImg" alt="" />
                    <h3 className="loginLogo">LetsConnect</h3>
                    <span className="loginDesc">
                        Start Your Journey and meet people around you.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit = { handleClick }>
                        <input placeholder="Username" 
                               required 
                               ref={ username } 
                               className="loginInput"
                        />
                        <input placeholder="Email" 
                               required 
                               ref ={ email } 
                               type="email" 
                               className="loginInput"
                        />
                        <input placeholder="Password" 
                               required 
                               ref={ password } 
                               type="password" 
                               minLength="6" 
                               className="loginInput"
                        />
                        <input placeholder="Re-enter password" 
                               required 
                               ref= { passwordAgain } 
                               type="password" 
                               className="loginInput"
                        />
                        <button className="loginButton" type ="submit" >
                            Sign Up
                        </button>
                
                            <button className="loginRegisterButton">
                                Log into Account
                            </button>
                       
                    </form>
                </div>
            </div>   
        </div>
    )
}
