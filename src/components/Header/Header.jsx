import './Header.scss'
import logo from '../../images/logo.png'
import instagramIMG from '../../images/insta.png'

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
                </div>
            </header>
        </div>
    )
}