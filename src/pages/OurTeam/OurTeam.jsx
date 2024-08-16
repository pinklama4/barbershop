import React from "react";


//images
import teamIMG from '../../images/teamIMG.png'

//styles
import './OurTeam.scss'

export function OurTeam() {
    return(
        <div className="wrapper">

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

        </div>
    )
}