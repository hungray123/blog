import React from 'react';
import './Section.css'
import a1 from '../images/c1.jpg'
import a2 from '../images/c2.jpg'
import a3 from '../images/c3.jpg'
import { Link } from 'react-router-dom';
function Section(){
  
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm">
                   
                    <div className="sec">
                        <div className="c1">
                          {/* <img src={a1} alt="" className="section-images" /> */}
                          <div className="title">
                             
                          </div>
                          <div className="js">
                              <h2 className=" cc c1-title"><Link to='/' className="title-link"></Link></h2>
                              </div>

                        </div>
                       
                    </div>
                </div>
                <div class="col-sm">
                  
                    <div className="sec">
                        <div className="c2">
                             {/* <img src={a2} alt=""  className="section-images"/> */}
                             <div className="title">
                            
                               
                          </div>
                          <div className="js">
                              <h2 className=" cc c2-title"><Link to='/' className="title-link">Vịnh hạ long đầy nắng và gió yêu em 2021 kỷ niệm</Link></h2>
                              </div>

                        </div>
                           
                    </div>
                </div>
                <div class="col-sm">
                    <div className="sec">
                        <div className="c3">
                                {/* <img src={a3} alt=""  className="section-images" /> */}
                                <div className="title">
                               
                          </div>
                          <div className="js">
                              <h2 className=" cc c2-title"><Link to='/' className="title-link">Vịnh hạ long đầy nắng và gió yêu em 2021 kỷ niệm</Link></h2>
                              </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            

      </div>

    
      
    );

}
export default Section;