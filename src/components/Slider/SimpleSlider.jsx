import React, {useState} from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SimpleSlider.scss'

import hair1 from '../../images/work-1.png'
import nail1 from '../../images/work-7.png'
export  function SimpleSlider() {
    const [activeTab, setActiveTab] = useState('hair');

    const hairImages = [
        hair1,
        hair1,
        hair1,
        hair1,
        hair1,
        hair1
    ];

    const nailImages = [
        nail1,
        nail1,
        nail1,
        nail1,
        nail1,
        nail1
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <div className="buttons-container">
                <button
                    className={activeTab === 'hair' ? 'active' : ''}
                    onClick={() => setActiveTab('hair')}
                >
                    Парикмахерские услуги
                </button>
                <button
                    className={activeTab === 'nail' ? 'active' : ''}
                    onClick={() => setActiveTab('nail')}
                >
                    Маникюр
                </button>
            </div>
            <Slider {...settings}>
                {activeTab === 'hair'
                    ? hairImages.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={image} alt={`Hair ${index + 1}`} />
                        </div>
                    ))
                    : nailImages.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={image} alt={`Nail ${index + 1}`} />
                        </div>
                    ))}
            </Slider>
        </div>
    );
}
