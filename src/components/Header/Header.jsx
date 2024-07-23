import React from "react";
import './Header.scss'
import menuBurgerIMG from '../../images/menu.png'
import logo from '../../images/logo.png'
import instagramIMG from '../../images/insta.png'
import {useState} from "react";

export function Header() {
    const [open, setOpen] = useState(false)
    return(
        <div className="wrapper">
            <header>
                <div className="header-content">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <nav className={`menu ${open ? "open" : ""}`}>
                        <ul className="menu-links">
                            <li>
                                <a href="/">Главная</a>
                            </li>
                            <li>
                                <a href="/ourteam">Мастера</a>
                            </li>
                            <li>
                                <a href="/price">Услуги</a>
                            </li>
                            <li>
                                <a href="/contacts">Контакты</a>
                            </li>
                            <li>
                                <a href="https://google.com">
                                    <img src={instagramIMG} alt="insta"/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button className="button-burger" onClick={() => setOpen(!open)}>
                        <img src={menuBurgerIMG} alt="menu"/>
                    </button>
                </div>
            </header>
        </div>

    )
}