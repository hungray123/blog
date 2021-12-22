import React ,{useState,useEffect}from 'react';
import Nav from '../Navbar/Navbar'
import avatar from '../Home/images/c5.jpg'
import './profile.css'
import PopupUpdate from './popupUpdate';
import { getUser,user__Role,getToken} from '../../components/Utils/Common'
import axios from 'axios';
import { setUserSession, removeUserSession } from '../../components/Utils/Common';
function Profile() {

     const [poppup, setPopup] = useState(false);
     const [user,setUser]=useState({});

    //  loadDataProfile =()=>{
       
    //  }
  



    return (
       <>
            <Nav/>,
            <div className="container profile">
                <div className="main-profile">
                    <h3 className="profile__title">Thông tin cá nhân</h3>
                      <div className="content__profile">
                      
                        <img src={avatar} alt="John" className="img_profile"></img>
                          <div className="profile__info">
                            <p className="profile__name">Vanhung</p>
                            <p className="profile__name"> 0961461262</p>
                            <p className="profile__name">Huy Hieu</p>
                            <p className="profile__name">Hungvantt567@gmail.com</p>
                            <div className="btn__profile">
                              <button className="btn btn-danger sm btn-pass">Forget Password</button>
                              <button className="btn btn-success sm"  onClick={()=>setPopup(true)}>Update profile</button>
                          </div>
                          </div>
                         
                         
                       </div>

                      <PopupUpdate trigger={poppup} setTrigger={setPopup}/>
                </div>

                
            </div>
       </>
    );
}

export default Profile;