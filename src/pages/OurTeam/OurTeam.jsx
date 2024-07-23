import React from "react";
//components
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

//images
import teamIMG from '../../images/teamIMG.png'

//styles
import './OurTeam.scss'

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