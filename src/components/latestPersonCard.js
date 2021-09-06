import React from 'react'
import './../styles/pageone.css'
import templeImage from './../images/templee.png'
import data from './data.json'
import Person from './person'

function LatestPersonCard(){

  return (
            <>
              <div className = "latest-card-container">
                <img className = "temple-image" alt="temple" src={templeImage} />
                <div className="description">

                {data.map((details) => {
                        return <>
                          <h3>{details.headingLatest}</h3>
                    </>  
                    })}
                    <Person />
                </div>
              </div>
            </>
        )
  }

export default LatestPersonCard;

