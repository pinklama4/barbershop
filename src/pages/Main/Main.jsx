import {Header} from "../../components/Header/Header";
import './Main.scss'

import mouse from '../../images/mouse.png'

export function Main() {
    return(
       <div className="wrapper">
           <main className="main-screen">
               <Header/>
               <div className="main-content">
                   <h1>Barbershop</h1>
                   <div className="main-content__scroll">
                       <img src={mouse} alt="mouse"/>
                       <p>Прокрутите вниз</p>
                   </div>
               </div>
           </main>
       </div>
    )
}