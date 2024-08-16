import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../Footer/Footer";


export function Layout() {
    return(
        <div>
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}