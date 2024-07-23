import React from "react";

//styles
import './Contacts.scss'

//images
import mapIMG from '../../images/mapIMG.png'

//components
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

export function Contacts() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="contacts">
                <div className="contacts-content">
                    <p className="title-contacts">Контакты</p>
                    <div className="map">
                        <img src={mapIMG} alt="map"/>
                    </div>
                    <div className="contacts-links-container">
                        <div className="contacts-links">
                            <p>Контакты</p>
                            <a href="tel:+78121234567">+7 (812) 123-45-67</a>
                            <a href="tel:+78121234567">+7 (812) 123-45-67</a>
                            <a href="https://google.com">Иванов Иван Иванович</a>
                            <a href="https://google.com">Иванов Иван Иванович</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}