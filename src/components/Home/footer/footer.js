import React from 'react';
import './footer.css'
import logo from '../images/trawell_logo.png'
function footer(){
   
        return (
            <div className="footer-container">
                <div className="row">
                    <div className="col-sm">
                        <div className="footer-inf">
                             <img src={logo} alt="" />
                            <p>Created by Meks Powered by VanHungDz</p>
                            <p>Copyright 2021 - All rights discovery</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="footer-explore">
                            <p>EXPLORE</p>
                            <ul className="explores">
                                <li className="foo-link"><span>Dining</span></li>
                                <li className="foo-link"><span>NightLife</span></li>
                                <li className="foo-link"><span>Shopping</span></li>
                                <li className="foo-link"><span>Dining</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="footer-features">
                                <p>EXPLORE</p>
                                <ul className="features">
                                    <li className="foo-link"><span>Styleguide</span></li>
                                    <li className="foo-link"><span>Layouts</span></li>
                                    <li className="foo-link"><span>Shortcodes</span></li>
                                    <li className="foo-link"><span>Blog</span></li>
                                </ul>
                            </div>
                    </div>
                    <div className="col-sm">
                        <div className="newletter">
                            <span>NEWLETTER</span>
                            <p>Make sure to subscribe to our newsletter and be the first to know the news.</p>
                            <input type="text" placeholder="your email address" className="input" />
                            <button className="btn btn-warning btn-sm">Subscribe</button>
                        </div>
                    </div>
                    
                </div>  

            </div>
           
        );
   
};
export default footer;