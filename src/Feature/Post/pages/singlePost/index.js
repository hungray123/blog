import React from 'react';
import PropTypes from 'prop-types';
import './post.css'
import avatar from '../../../../components/Home/images/avatar.jpg'
import { Link } from 'react-router-dom';
import c1 from '../../../../components/Home/images/nightlife.jpg'
import Footer from '../../../../components/Home/footer/footer'
function index(props) {
    return (
        <>
        
         <div className=" post container">
             <div className="post row">
                 <div className="col">
                     <div className="profile">
                        <div className="profile__x">
                            <img src={avatar} alt="" className="avartar" />
                            <div className="profile__info">
                                <span>Writen by</span>
                                <p>Lindsey Hart</p>
                            </div>
                        </div>
                     </div>
                    
                 </div>
                 <div className="col-6">
                     <div className="post__main">
                         <button className="btn btn-primary btn__topic btn-sm">EVENTS</button>
                         <h4 className="title__post">Best Italian Restaurants in NYC</h4>
                         <span>March 16, 2018 | 3 min read | Add comment</span>
                         <div className="content__post">

                             <p>With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users, and there will be many who might even use the same layouts. If MySpace layouts are chosen well, then you can enhance your profile a great deal. This will help you get more contacts as well. But because of the demand, there will be the need to find unique layouts.</p>
                             <p>I am going to get these four principles from two passages in the Bible, Psalms 42-43. In the passages, the Psalmist is in a depression. He is searching the depths of his soul looking for God. He talks about how to get yourself out of a depression. I am going to take these teachings and apply them to feelings of giving up because nothing is happening in your home based MLM business opportunity, your online sales, your job, and etc. We all get down for one reason or another. The trick is to not give up, but get up and go forward in the face of adversity.</p>
                         </div>
                         <div className="tag__post">
                             <ul className="tag__events">
                                 <li className="tag__link">BLOCKQUOTE</li>
                                 <li className="tag__link">SIDEBAR</li>
                                 <li className="tag__link">SINGLE POST</li>

                             </ul>
                         </div>
                           {/* COMMENT */}
                     <div className="post__cmt">
                     <h5 className="h5__border"> <span className="orther__post__heading">LEAVE REPLY</span></h5>
                       <div className="form-cmt">
                            <div className="ac_cmt">
                            <input type="text" name="" id="inout" width="100%" />
                           <button type="submit" className="btn btn-success">Comment</button>
                            </div>
                           <div className="content__cmt">
                               <img src={c1} alt="" />
                               <p>Helo bro. Can I help you?</p>

                               
                           </div>

                          
                       </div>
                     </div>
                         <div className="other__post">
                            <h5 className="h5__border"> <span className="orther__post__heading">RELATED POSTS</span></h5>
                             
                                 <div className="post-1">
                                     <img src={c1} alt="" className="img__other_post"/>
                                     <div className="other__post_info">
                                         <span className="nightlife_btn">NIGHTLIFE</span>
                                         <h5 className="post__info__title">Best Dance bars NYC</h5>
                                         <span>March 9, 2018</span>
                                     </div>
                                 </div>

                                 
                                 <div className="post-1">
                                     <img src={c1} alt="" className="img__other_post"/>
                                     <div className="other__post_info">
                                         <span className="nightlife_btn">NIGHTLIFE</span>
                                         <h5 className="post__info__title">Best Dance bars NYC</h5>
                                         <span>March 9, 2018</span>
                                     </div>
                                 </div>

                                 
                                 <div className="post-1">
                                     <img src={c1} alt="" className="img__other_post"/>
                                     <div className="other__post_info">
                                         <span className="nightlife_btn">NIGHTLIFE</span>
                                         <h5 className="post__info__title">Best Dance bars NYC</h5>
                                         <span>March 9, 2018</span>
                                     </div>
                                 </div>

                                 
                                 <div className="post-1">
                                     <img src={c1} alt="" className="img__other_post"/>
                                     <div className="other__post_info">
                                         <span className="nightlife_btn">NIGHTLIFE</span>
                                         <h5 className="post__info__title">Best Dance bars NYC</h5>
                                         <span>March 9, 2018</span>
                                     </div>
                                 </div>
                             
                         </div>
                     </div>
                   
                 </div>
                 <div className="col">
                     <div className="sidebar__post">
                         <p>What to see?</p>
                     <ul className="topic__post">
                         <li className="post__link"><Link className="post__link" to="/">Dinning</Link><span className="count__post" id="count1">8</span></li>
                         <li className="post__link"><Link className="post__link" to="/">Events</Link><span className="count__post" id="count2">9</span></li>
                         <li className="post__link"><Link className="post__link" to="/">Nightlife</Link><span className="count__post " id="count3">1</span></li>
                         <li className="post__link"><Link className="post__link" to="/">Shopping</Link><span className="count__post" id="count4">3</span></li>
                     </ul>
                     </div>
                          {/* p2 */}
                     <div id="p2" className="sidebar__post">
                         <p>Recent Stories</p>
                     <ul className="topic__post">
                         <li className="post__link">
                         <div className="post__link_other">
                                 <img src={c1} alt="" />
                                 <div className="link__other_info">
                                     <h5 className="other_info__title">
                                     8 Places to Drink Bourbon in NYC
                                     </h5>
                                     <p className="recent__time">March 16, 2018</p>
                                 </div>
                             </div>  

                         </li>
                         <li className="post__link">
                            <div className="post__link_other">
                                    <img src={c1} alt="" />
                                    <div className="link__other_info">
                                        <h5 className="other_info__title">
                                        8 Places to Drink Bourbon in NYC
                                        </h5>
                                        <p className="recent__time">March 16, 2018</p>
                                    </div>
                                </div>  
                         </li>
                         <li className="post__link">
                            <div className="post__link_other">
                                        <img src={c1} alt="" />
                                        <div className="link__other_info">
                                            <h5 className="other_info__title">
                                            Best Italian Restaurants in NYC
                                            </h5>
                                            <p className="recent__time">March 16, 2018</p>
                                        </div>
                                    </div>  
                         </li>
                         <li className="post__link">
                         <div className="post__link_other">
                                    <img src={c1} alt="" />
                                    <div className="link__other_info">
                                        <h5 className="other_info__title">
                                        Soups of New York City
                                        </h5>
                                        <p className="recent__time">March 16, 2018</p>
                                    </div>
                                </div>  
                         </li>
                     </ul>
                     </div>
                 </div>
             </div>
         </div>
         <Footer/>
        </>
        
    );
}

export default index;