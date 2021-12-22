import React from 'react'; // imr
import  { useState } from 'react'; //imrs
import ReactDOM from 'react-dom'; // imrd
import { Link,NavLink } from 'react-router-dom';
import { getUser, removeUserSession, getRole } from '../Utils/Common';
import  './navbar.css'
import {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import  Dropdown from './Dropdown';




function Navbar(props){


   const activeStyle = { color: 'red' };
   const history = useHistory();
   const [click, setClick] = useState(); //ufs
   const handleClick =()=>setClick(!click)
   const openlink = () =>{
       window.open("https://www.youtube.com/watch?v=T2MhVxJxsL0&t=1656s")
   }
   const [dropdown ,setDropdown]=useState(false);

   function handleprofile(){
      
    if(dropdown===false){
        setDropdown(true);
        console.log(dropdown)
    }else{
        setDropdown(false);
        console.log(dropdown)
    }
       
      
   }
  
  

//   const [user, setUser]=useState({});
//   const token= sessionStorage.getItem("user")
//   console.log("ds"+token)
//   console.log("hihi"+user)

//   useEffect(() => {

//     loadData();
     
//   }, [token])

//   const loadData=()=>{

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
    
//     var urlencoded = new URLSearchParams();
    
//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       body: urlencoded,
//       redirect: 'follow'
//     };
    
//     fetch("http://localhost:4000/local/dev", requestOptions)
//       .then(response => response.text())
//       .then(result => {
//         console.log(result)
//         setUser(result);
//       })
//       .catch(error => console.log('error', error));
  
//   }
  
 const [uu ,setUser]=useState(getUser());


 //console.log(tg.username);
//   useEffect(() => {
//      loadData();
//   }, [u])
//   let loadData=()=>{
//    var req={
//        method:'GET',
//        redirect:"follow"
//    };

//    fetch("http://localhost:4000/local/dev",req).then(res=>{
//        if(res.ok){
//            return res.json();
//        }
//        throw new Error(res.status)
//    })
//    .then(result=>{
//        setUser(result);
//    })
//    .catch(err=>{
//        console.log(err)
//    })
//   }
//  console.log("hihi"+user);
  //console.log("hihi"+getUser);
 // console.log(typeof("hihi"+getUser))
// const user =getUser();
//   useEffect(() => {
//      setUser(getUser);
    
//   },[]);
// useEffect(() => {

    
//     //  setUser(true);
    
// }, [])
  
  const handleLogout = () => {  
      removeUserSession();  
      history.push('/event');
      setUser(false);
  }
 
 
  const [role ,setRole]=useState(getRole());
  //console.log(role.username);
  const acc=false;
 
   useEffect(() => {
       if(role==true){
          
          console.log("day la ADmin",role)
       }else{
           
       }
      
   }, [role]);



  // console.log("kaka"+user);
        return (
            <div className="navbar">
                <div className="trawell-top-bar">
                    <div className="nav-top">
                        <ul className="nav-top-list">
                            <li className="nav-item">
                                <a href="http://" target="_blank" className="navlinks" rel="noopener noreferrer">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="http://" target="_blank" className="navlinks" rel="noopener noreferrer">Layouts</a>
                            </li>
                            <li className="nav-item">
                                <a href="http://" target="_blank" className="navlinks" rel="noopener noreferrer">Shortsodes</a>
                            </li>
                            <li className="nav-item">
                                <a href="http://" target="_blank" className="navlinks" rel="noopener noreferrer">Styleguids</a>
                            </li>
                            <li className="nav-item">
                                <a href="http://" target="_blank" className="navlinks" rel="noopener noreferrer">Shop</a>
                            </li>
                        </ul>
                        <div className="login__block">
                           
                                 {uu ?(
                                    
                                     <div>
                                        
                                         <p onClick={handleprofile} className='a__login ' >{uu.username} <i className={dropdown ?'fas fa-caret-up':"fas fa-caret-down"}/>
                                          </p>
                                       
                                             
                                          <div className={dropdown ? 'dr__show':"dsf"}>
                                              {role? (
                                                     <ul className="dr_show">
                                                     <li className="dr__link"><Link to='/profile'>Profile</Link></li>
                                                     <li className="dr__link"><Link to='/manager'>Manager</Link></li>
                                                     <li className="dr__link"><Link to='/event'onClick={handleLogout}>Logout</Link></li>
                                                 </ul>
                                              ):(
                                                <ul className="dr_show">
                                                <li className="dr__link"><Link to='/profile'>Profile</Link></li>
                                                <li className="dr__link"><Link to='/event'onClick={handleLogout}>Logout</Link></li>
                                            </ul>
                                              )
                                            }
                                          </div>
                                     
                                     </div>
                                     
                                 ):(

                                    <Link  className="a__login" to="/event">Login
                                  
                                     
                                     </Link>

                                 )}
                           
                         
                            
                        
                        
                       
                             
                               
                             
                               
                             
                               
                              
                         </div>
                    </div>
                     
                </div>
                <div className="trawell-header">
                    <Link to='/home'className="navbar-logo" >VanHung Trawell</Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={ click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                        <ul className={click ? 'nav-menu active': 'nav-menu'}>
                            <li className="nav-item">
                                <NavLink  exact='true' to='/dining' className="nav-links" activeStyle={activeStyle} > Dining</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to='/lightlife' className="nav-links" activeStyle={activeStyle} >Lightlife</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to='/shopping' className="nav-links"activeStyle={activeStyle} >Shopping</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to='/event' className="nav-links" activeStyle={activeStyle}>Event</NavLink>
                            </li>
                        
                        </ul>
                         
                        <ul className="trawell-actions">
                            <li className="nav-item">
                                    <div>
                                        <i class="fas fa-shopping-cart"></i>
                                    </div>     
                            </li>
                            <li className="nav-item">
                                    <div onClick={handleClick}>
                                    {/* <i className={ click ? 'fas fa-times':'fas fa-bars'}/> */}
                                     <i className={click ? 'fas fa-times':'fas fa-search'}></i>
                                      
                                    </div>
                            </li>
                            <div className="show" >
                                <input type="text" placeholder="search..." className={click ? "show":"no-show"} />
                            </div>
                           
                        </ul>
                </div>
               
            
                   {/* <div className="ouside">
                       <ul className="nav-ul">
                            <li className="nav-item">
                                    <Link to='/login' className="">
                                        <button   className=' btn btn-danger btn-sm'>Đăng nhập</button>
                                    </Link>
                            </li>
                            <li className="nav-item">
                                    <button  onClick={openlink} title="facebook"  className='btn-outside'>
                                        <img src={fb} alt="facebook" className="icons" />
                                    </button>
                            </li>
                            <li className="nav-item">
                                    <button  onClick={openlink} title="facebook" className='btn-outside'>
                                        <img src={ins} alt="instagram"className="icons" />
                                    </button>
                            </li>
                            <li className="nav-item">
                                    <button  onClick={openlink}  className='btn-outside'>
                                        <img src={ytb} alt="youtube"className="icons" />
                                    </button>
                            </li>
                            <li className="nav-item">
                                    <button className='btn-outside' >
                                    <i class="fas fa-search search" ></i>
                                    </button>
                            </li>
                       </ul>
                       
                       
                      
                   </div> */}
                 
                  
              
            </div>
        );
    
};

export default Navbar; //exp



