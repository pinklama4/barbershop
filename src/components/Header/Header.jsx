import logo from '../../images/logo.png'

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
                        </ul>
                        <ul>
                            <li>
                                <a href="#">Мастера</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">Работы</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}