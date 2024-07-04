import React from "react";

import masterPhotoPrice from "../../images/master-priceIMG.png"
import {PriceNumber} from "../../components/PriceNumber/PriceNumber";

import './Price.scss'
import {Header} from "../../components/Header/Header";

export function Price() {
    return(
        <div className="wrapper">
            <Header/>
            <section className="price">
                <p>
                     Цены на услуги
                </p>
                <div className="price-content">
                    <div className="price-content__container">
                        <div className="master-photo__price">
                            <img src={masterPhotoPrice} alt=""/>
                        </div>
                        <div className="price-services">
                            <PriceNumber/>
                        </div>
                        <div className="price-services">
                            <PriceNumber/>
                        </div>
                        <div className="master-photo__price">
                            <img src={masterPhotoPrice} alt=""/>
                        </div>
                        <div className="master-photo__price">
                            <img src={masterPhotoPrice} alt=""/>
                        </div>
                        <div className="price-services">
                            <PriceNumber/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}