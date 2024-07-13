import React from "react";
import './Footer.scss'

import footerLogoIMG from '../../images/logo-footer.png'
import instagramIMG from '../../images/insta.png'

export function Footer() {
    return (
        <div className="wrapper">
            <footer>
                <div className="footer-content">
                    <div className="logo-footer">
                        <img src={footerLogoIMG} alt="logo-footer"/>
                    </div>
                    <div className="footer-links">
                        <p>Контакты</p>
                        <a href="tel:+7812123-45-67">+7 (812) 123-45-67</a>
                        <a href="tel:+7812123-45-67">+7 (812) 123-45-67</a>
                        <p className='title-footer'>Новоостровский проспект, дом 36 лит. С</p>
                    </div>
                    <div className="footer-links">
                        <p>Режим работы</p>
                        <p className='title-footer'>C 10:00 до 21:00 (Пн-Пт)</p>
                        <p className='title-footer'>С 11:00 до 20:00 (Сб-Вс)</p>
                    </div>
                    <div className="footer-links">
                        <p>Мы в Instagram</p>
                        <a href="#">
                            <img src={instagramIMG} alt="instagram-img"/>
                        </a>
                    </div>
                </div>
                <p className="copyright">Copyright © 2017 - 2022</p>
            </footer>
        </div>
    )
}