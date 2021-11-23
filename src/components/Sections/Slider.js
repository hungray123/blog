import React from 'react';
import Slick from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from './Item';
//import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';

export default function Slider(){
    
      var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        swipeToSlide: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        afterChange: function(index) {
            console.log(
              `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
          },
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="section-slideshow">
        
          <Slick {...settings}>
           
                {Item.map((item)=>(
                  <div className="silder">
                        <img src={item.image} alt="hihi" className="slide-image" />
                  </div>
                ))}
             
           
          </Slick>
        </div>
      );
    
  }