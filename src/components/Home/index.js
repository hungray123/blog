import React from 'react';

import Map from '../Home/Map/Map'
import Section from '../Home/Contents/Section';
import SecLayout from '../Home/Sections/SectionLayout';
import Slider from '../Home/Sections/Slider';
import Sec from '../Home/Sections/Section';
import Section2 from '../Home/Section/Section-2';
import Main from '../Home/main/main-body';
import SectionLayout from '../Home/Sections/SectionLayout';
import Footer from '../Home/footer/footer'
import { Route, Switch, useRouteMatch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Nav from'../Navbar/Navbar';
const Home=()=>{
        const math=useRouteMatch();
        console.log(math)
  
        return (
                <div className="xxx">
                             <Nav/>
                       
                                {/* UI */}
                                       <Section/>
                                        <Sec/>
                                        <Section2/>
                                        <Main/>
                                        <SectionLayout/>
                                        <Slider/>
                                        <Footer/>
                                        {/* UI */}
                              

                        
                                
                      
                </div>
            
            
      
            
        );
   
}
export default Home;