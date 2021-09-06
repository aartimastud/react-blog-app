import React from 'react'
import './../styles/pageone.css'
import templeImage from './../images/templee.png'
import data from './data.json'

function TheLatestCard(props){

  return (
            <>
              <div className = "latest-card-container">
                <img className = "temple-image" alt="temple" src={templeImage} />
                <div className="description">

                {data.map((details) => {
                        return <>
                          <h3>{details.headingLatest}</h3>
                          <p className="para1">{details.cardpara}</p>
                          <h5 className="travel post-travel2">{details.travel} &nbsp;&nbsp; <span>{details.date}</span></h5> 
                    </>  
                    })}
                </div>
              </div>
            </>
        )
  }

export default TheLatestCard;

