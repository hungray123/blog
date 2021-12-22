import React, { useEffect } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { setUserSession } from '../../components/Utils/Common';
import { getUser,user__Role } from '../../components/Utils/Common'
 import Nav from '../../components/Navbar/Navbar'
import Cookies from 'js-cookie'
function Event() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] =useState(null);
    const history = useHistory();
    const [users,setUser]=useState('');


    function login() {
        // console.warn(username, password)
        // let item = { username, password };
        // let result = fetch("http://localhost:3000/api/data", {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": 'application//json'
        //     },
        //     body: JSON.stringify(item)
        // });
        // result=(await result).json();
        // localStorage.setItem("user-info",JSON.stringify(result))
        // history.push("/home")

         

        axios({
            method:'POST',
            url:'http://localhost:4000/local/dev',
            data:{
                username: username,
                password: password
            },
           
        }).then( async (response)=>{
            console.log("response",response);
            setUserSession(response.data.data);
            user__Role(response.data.data.isAdmin);
            console.log("hihi",response.data.data.isAdmin);
            console.log("response",response.data.token);
            localStorage.setItem('accessTokens',response.data.token);
            Cookies.set('cookies',response.data.token);
            history.replace("/home");
           

        }).catch(function (error){
        //    console.log("error",error);
           if (error.response.status === 400) setError(error.response.data.message);
           else setError("Something went wrong. Please try again later.");
            
        });
    
        //  console.warn(username, password)
    }

    
    return (
        <>
          <Nav/>
            <div className="container login">
                <div className="form__login">
                    <h5 className="title-login">
                        <span>Login</span>
                    </h5>
                    <div className="input__login">
                        <input type="text" name="username"  value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"
                            className="username" id="" />
                        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"
                            className="password" id="" />
                        {error && <div className="error">{error}</div>}

                        <div className="btn__login">

                            <button onClick={login} type="button" className="btn btn-danger">Login</button>
                            <Link to='/dangky' style={{ display: 'inherit' }}>Bạn chưa có tài khoản</Link>

                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}
export default Event;
