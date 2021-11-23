import React from 'react';
import './Main.css'

function main() {
    return (
       <div className="Dining container">
           <div className="Dingning__row row">
               <div className="Dining__col col-sm">
                   <div className="post__item">
                       <div className="post__bg1" />
                       <div className="info">
                           <button className="btn btn-danger btn-sm">Dining</button>
                           <h4 className="post-title">Best italian Restaurants in NYC</h4>
                           <p className="time">March 16,2018</p>
                       </div>
                   </div>
               </div>
               <div className="col-sm">
                   <div className="post__item">
                        <div className="post__bg2" />
                        <div className="info">
                            <button className="btn btn-danger btn-sm">Dining</button>
                            <h4 className="post-title">Best italian Restaurants in NYC</h4>
                            <p className="time">March 16,2018</p>
                         </div>
                   </div>
               </div>
           </div>
       </div>
    );
}

export default main;