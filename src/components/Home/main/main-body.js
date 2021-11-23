import React from 'react';
import './main.css'
import { Link } from 'react-router-dom';
function body(){
 
        return (
           <div className="container">
                <div className="heading">
                   <h2 className="title-sec"><span>Browse the content</span></h2>
                </div>
               <div className="row">
                   <div className=" col-sm">
                      <div className="main-block">
                            <div className="main-1"></div>
                            <div className="heading-post">
                                <div className="abc">
                                    <button type="button" className="btn btn-warning bt">Sports</button>
                                    <h3 className="txt">Traveling daily fresh</h3>
                                    <p className="txt-time">March,3Augst,2021</p>
                                </div>
                                  
                            </div>
                      </div>
                   </div>
                   <div className="col-sm ">
                       <div className="main-block">
                           <div className="main-2"></div>
                           <div className="heading-post">
                                <div className="abc">
                                    <button type="button" className="btn btn-success bt">Nightlife</button>
                                    <h3 className="txt">Traveling daily fresh</h3>
                                    <p className="txt-time">March,3Augst,2021</p>
                                </div>
                            </div>
                       </div>
                   </div>
               </div>
               <div className="row">
                   <div className=" col-sm">
                      <div className="main-block">
                            <div className="main-1"></div>
                            <div className="heading-post">

                                <div className="abc">
                                <button type="button" className="btn btn-danger bt">Dinning</button>
                                <h3 className="txt">Traveling daily fresh</h3>
                                <p className="txt-time">March,3Augst,2021</p>
                                </div>
                                  
                            </div>
                      </div>
                   </div>
                   <div className="col-sm ">
                       <div className="main-block">
                           <div className="main-2"></div>
                           <div className="heading-post">
                                <div className="abc">
                                    <button type="button" className="btn btn-primary bt">Event</button>
                                    <Link to="/Post/123">  <h3 className="txt">Traveling daily fresh</h3></Link>
                                     <p className="txt-time">March,3Augst,2021</p>
                                </div>
                                
                            </div>
                       </div>
                   </div>
               </div>

            <div className="more-section">
                <div className="btn-more-l">
                    <button type="button" className="btn btn-warning btn-more">See more</button>
                </div>
            </div>

                  
               
           </div>
        );
   
}
export default body;