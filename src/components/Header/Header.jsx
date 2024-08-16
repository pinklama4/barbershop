
import './Header.scss'
import menuBurgerIMG from '../../images/menu.png'
import logo from '../../images/logo.png'
import instagramIMG from '../../images/insta.png'
import {useState} from "react";
import { Link } from 'react-router-dom';

export function Header() {
    const [open, setOpen] = useState(false)
    return(
        <div className="wrapper">
            <header>
                <div className="header-content">
                    <div className="logo">
                        <Link
                            to="/">
                              <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <nav className={`menu ${open ? "open" : ""}`}>
                        <ul className="menu-links">
                            <li>
                                <Link to="/">Главная</Link>
                            </li>
                            <li>
                                <Link to="/ourteam">Мастера</Link>
                            </li>
                            <li>
                                <Link to="/price">Услуги</Link>
                            </li>
                            <li>
                                <Link to="/contacts">Контакты</Link>
                            </li>
                            <li>
                                <Link to="https://google.com">
                                    <img src={instagramIMG} alt="insta"/>
                                </Link>
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