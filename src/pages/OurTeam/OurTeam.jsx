import {Header} from "../../components/Header/Header";

import teamIMG from '../../images/teamIMG.png'

import './OurTeam.scss'
import {Footer} from "../../components/Footer/Footer";
export function OurTeam() {
    return(
        <div className="wrapper">
            <Header/>
            <div className="team">
                <p className="team-title">Наши мастера</p>
                <div className="team-content">
                    <div className="team-card">
                        <img src={teamIMG} alt="team-photo"/>
                        <p>Елена Васильевна</p>
                        <p>Визажист</p>
                    </div>
                    <div className="team-card">
                        <img src={teamIMG} alt="team-photo"/>
                        <p>Елена Васильевна</p>
                        <p>Визажист</p>
                    </div>
                    <div className="team-card">
                        <img src={teamIMG} alt="team-photo"/>
                        <p>Елена Васильевна</p>
                        <p>Визажист</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}