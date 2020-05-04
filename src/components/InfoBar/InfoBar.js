import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png'

import './InfoBar.css'


export default function InfoBar({ room }) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online"/>
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">X</a>
            </div>

            
        </div>
    )
}
