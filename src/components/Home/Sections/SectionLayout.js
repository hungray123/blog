import React from 'react';
import './Section.css'


function SectionLayout(){

        return (
            <div className="container">
                <div className="heading">
                   <h2 className="title-sec"> <span>EXPLORE THE CITY</span></h2>
                </div>
                <div className="row">
                    <div className="col-sm">
                       <div className="topic__block">
                            <div className="topic">
                                <div className="bg bg-topic"></div>
                                <div className="title-topic">
                                    <h5 className="head-topic">Dining</h5>
                                    <span>8 articles</span>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="col-sm">
                        <dib className="topic__block">
                            <div className="topic1">
                                <div className="bg bg-topic1"></div>
                                    <div className="title-topic">
                                        <h5 className="head-topic">Event</h5>
                                        <span>9 articles</span>
                                    </div>
                            </div>
                        </dib>
                       
                        
                    </div>
                    <div className="col-sm">
                       <div className="topic__block">
                            <div className="topic2">
                                <div className="bg bg-topic2"></div>
                                    <div className="title-topic">
                                        <h5 className="head-topic">Nightlife</h5>
                                        <span>6 articles</span>
                                     </div>
                             </div>
                       </div>
                        
                    </div>
                    <div className="col-sm">
                       <div className="topic__block">
                            <div className="topic3">
                                <div className="bg bg-topic3"></div>
                                    <div className="title-topic">
                                        <h5 className="head-topic">Shopping</h5>
                                        <span>5 articles</span>
                                    </div>
                                </div>
                       </div>
                        
                    </div>
                </div>

           </div>
              
          
        );
    
}
export default SectionLayout;