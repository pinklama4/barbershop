import React from "react";
import Slider from "react-slick";

import photo from '../../images/work-1.png'
import photoTwo from '../../images/work-7.png'

import './SimpleSlider.scss'

export  function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <Slider {...settings}>
           <div className="gallery-photo__slider">
               <p>Прикмахерский услуги</p>
               <div className="gallery-photo__slider-card">
                   <img src={photo} alt=""/>
                   <img src={photo} alt=""/>
                   <img src={photo} alt=""/>
                   <img src={photo} alt=""/>
                   <img src={photo} alt=""/>
               </div>

           </div>
            <div className="gallery-photo__slider">
                <p>Маникюр</p>
                <div className="gallery-photo__slider-card">
                    <img src={photoTwo} alt=""/>
                    <img src={photoTwo} alt=""/>
                    <img src={photoTwo} alt=""/>
                </div>
            </div>

        </Slider>
    );
}