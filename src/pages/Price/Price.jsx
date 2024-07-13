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
                        <div className="services">
                            <div className="master-photo__price">
                                <img src={masterPhotoPrice} alt=""/>
                            </div>
                            <div className="price-services">
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />

                            </div>
                        </div>
                        <div className="services">
                            <div className="price-services">
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />

                            </div>
                            <div className="master-photo__price">
                                <img src={masterPhotoPrice} alt=""/>
                            </div>

                        </div>
                        <div className="services">
                            <div className="master-photo__price">
                                <img src={masterPhotoPrice} alt=""/>
                            </div>
                            <div className="price-services">
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />
                                <PriceNumber
                                    nameServices="Женская укладка"
                                    additionalServices="+ обработк кончинков волос"
                                    price="1 000 ₽"
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}