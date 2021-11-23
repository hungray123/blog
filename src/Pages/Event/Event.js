import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { setUserSession } from '../../components/Utils/Common';

function Event(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] =useState(null);
    const history = useHistory();
    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {
    //         history.push("/")
    //     }
    // }, [])
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

        axios.post("http://localhost:5000/api/data",{
            username: username,
            password: password,
        }).then(response=>{
            console.log('response >>>',response);
             // history.push("/home")
               setUserSession(response.data.user);
                history.push("/home")
            

        }).catch(error =>{
            console.log('error >>>', error);
            if(error.response.status===401 || error.response.status===400){
                setError(error.response.data.message);
            }else{
                setError("Something wrong")
            }

        });

    }
    return (
        <>
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

                            <button onClick={login} className="btn btn-danger">Login</button>
                            <Link to='/dangky' style={{ display: 'inherit' }}>Bạn chưa có tài khoản</Link>

                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}
export default Event;
