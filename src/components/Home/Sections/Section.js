import React from 'react';
import './Section.css'
import sec from '../images/rime.jpg'

function Section(){

        return (
            <div className="container">
                <div className="trawell-section">
                    <h4 className="section-title">
                        <span>as seen in</span>
                    </h4>
                    <img src={sec} alt="" className="img-section" />
                </div>
            </div>
           
           
        );
    
}
export default Section;