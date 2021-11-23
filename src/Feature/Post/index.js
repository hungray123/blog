import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import singlePost from './pages/singlePost'
function Post() {

    const math=useRouteMatch();
    console.log(math)
    return (
        <div>
            <Switch>
                 {/* <Route exact path={math.url} component={Home}/> */}
                 <Route exact path={`${math.url}/:photoId`} component={singlePost}/>             
            </Switch>
            
        </div>
    );
}

export default Post;


// import React from 'react';

// import Map from '../Home/Map/Map'
// import Section from '../Home/Contents/Section';
// import SecLayout from '../Home/Sections/SectionLayout';
// import Slider from '../Home/Sections/Slider';
// import Sec from '../Home/Sections/Section';
// import Section2 from '../Home/Section/Section-2';
// import Main from '../Home/main/main-body';
// import SectionLayout from '../Home/Sections/SectionLayout';
// import Footer from '../Home/footer/footer'
// import { Route, Switch, useRouteMatch } from 'react-router';
// import SinglePage from '../Post/SinglePage';
// import { BrowserRouter } from 'react-router-dom';
// const Home=()=>{
//         const math=useRouteMatch();
//         console.log(math)
  
//         return (
//                 <div className="xxx">
                       
//                                 {/* UI */}
//                                        <Section/>
//                                         <Sec/>
//                                         <Section2/>
//                                         <Main/>
//                                         <SectionLayout/>
//                                         <Slider/>
//                                         <Footer/>
//                                         {/* UI */}
                              

//                         <div>
                             
//                                   <Switch>
//                                         <Route exact path={math.url} component={Home}/>
//                                         <Route path={`${math.url}/:photoId`} component={SinglePage}/>             
//                                 </Switch>
//                         </div>
                                
                      
//                 </div>
            
            
      
            
//         );
   
// }
// export default Home;