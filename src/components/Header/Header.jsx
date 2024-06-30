import './Header.scss'

import logo from '../../images/logo.png'
import insta from '../../images/insta.png'

export function Header() {
    return(
        <div className="wrapper">
            <header>
                <div className="header-content">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Главная</a>
                            </li>
                            <li>
                                <a href="#">Мастера</a>
                            </li>
                            <li>
                                <a href="#">Работы</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={insta} alt="insta"/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}