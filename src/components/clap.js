import React from 'react'
import clap from './../images/hand.png'

function Clap() {
    return (
        <>
            <div className = "clap-container">
                <img id="clap-image" src={clap} alt="clap-img"/> 
                <p>9.3k claps</p>
            </div>
        
        </>
    )
}

export default Clap;
