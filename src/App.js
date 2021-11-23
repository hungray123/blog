import { BrowserRouter as Router, Route, NavLink,Switch,Redirect, BrowserRouter } from 'react-router-dom'; //imrr
import React,{Suspense} from 'react';
import './App.css';
import Nav from './components/Navbar/Navbar'
import Home from './components/Home/index'
import Dining from './Pages/Dining/index'
import Event from './Pages/Event/Event'


 const Post = React.lazy(()=> import('./Feature/Post'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
       <BrowserRouter>
       <Router>
          <Nav/>
       
          <Switch>
            <Redirect exact from='/' to="/home"  />
            <Route path='/home' component={Home}/>
            <Route path='/dining' component={Dining}/>
            <Route path='/event' component={Event}/>
            <Route path='/Post' component={Post}/>

          </Switch>

        </Router>
       
       </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

