import React from 'react'
import './../styles/pageone.css'
import templeImage from './../images/templee.png'
import data from './data.json'

function MobileLatestCard(){

  return (
            <>
              <div className = "mobile-card-container">
                
                {data.map((details) => {
                        return <>
                        <div className="mobile-description">
                            <h3>{details.techPara}</h3>
                            <p>{details.nameTech}</p>
                        </div>
                    </>  
                    })}
                
                <div className="tech-image">
                    <img className = "tech-temple-image" alt="temple" src={templeImage} />
                </div>
              </div>
            </>
        )
  }

export default MobileLatestCard;

