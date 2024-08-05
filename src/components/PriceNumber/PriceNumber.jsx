import React from "react";

//styles
import './PriceNumber.scss'



export function PriceNumber(props) {
    return(
        <div className="wrapper">
            <div className="price-wrapper">
                <ul>
                    <li>
                        <div className="name-services">
                            <p>{props.nameServices}</p>
                            <p>{props.additionalServices}</p>
                        </div>
                        <div className="price-number">
                            <p>
                                {props.price}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}