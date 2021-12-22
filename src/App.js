import { BrowserRouter as Router, Route, NavLink,Switch,Redirect, BrowserRouter } from 'react-router-dom'; //imrr
import React,{Suspense} from 'react';
import './App.css';
import Nav from './components/Navbar/Navbar'
import Home from './components/Home/index'
import Dining from './Pages/Dining/index'
import Event from './Pages/Event/Event'
import Profile from './components/Profile/Profile'
import Register from './Pages/Register/Register'

import {useState,useEffect}from 'react';
import { getUser,user__Role,getToken} from './components/Utils/Common'
import axios from 'axios';
import { setUserSession, removeUserSession } from  './components/Utils/Common';


 const Post = React.lazy(()=> import('./Feature/Post'));
function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
       <BrowserRouter>
       <Router>
          {/* <Nav/> */}
       
          <Switch>
            <Redirect exact from='/' to="/home"  />
            <Route path='/home' component={Home}/>
            <Route path='/dining' component={Dining}/>
            <Route path='/event' component={Event}/>
            <Route path='/dangky' component={Register}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/Post' component={Post}/>

          </Switch>

        </Router>
       
       </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

