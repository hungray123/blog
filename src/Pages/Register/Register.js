import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { setUserSession } from '../../components/Utils/Common';
import { getUser,user__Role } from '../../components/Utils/Common'
import Nav from '../../components/Navbar/Navbar'

function Register() {
   


    function handleRegister() {
     
         
        axios({
            method:'POST',
            url:'http://localhost:4000/api/register',
            data:{
                email:email,
                username: username,
                password: password
            },
           
        }).then(function (response){
            console.log("response",response.data);
          
           
           

        }).catch(function (error){
            console.log("error",error);
           if (error.response.status === 400) setError(error.response.data.message);
           else setError("Something went wrong. Please try again later.");
            
        });
    
         //console.warn(username, password,email);
    }

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] =useState(null);

    
    return (
        <>
          <Nav/>
            <div className="container login">
                <div className="form__login">
                    <h5 className="title-login">
                        <span>Register</span>
                    </h5>
                    <div className="input__login">
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email"
                            className="email" id="" />
                        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"
                            className="username" id="" />
                        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"
                            className="password" id="" />
                        {error && <div className="error">{error}</div>}

                        <div className="btn__login">

                            <button onClick={handleRegister} type="button" className="btn btn-danger">Register</button>
                            <Link to='/event' style={{ display: 'inherit' }}>Login Now</Link>

                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}
export default Register;
