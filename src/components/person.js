import React from 'react'
import data from './data.json'
import '../index.css'
import person from './../images/boy-image.png'

function Person() {
    return (
        <>
            <div className = "person-container">
                <img id="person-image" src={person} alt="person-img"/> 
                {data.map((details) => {
                    return <>
                        <div className="person-des">
                             <h5 className="person-name">{details.name}</h5>
                             <p className="person-date">{details.dateTime}</p>
                        </div>
                           </>
                })}
            </div>
        
        </>
    )
}

export default Person;
