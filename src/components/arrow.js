import React from 'react'
import arrow from './../images/arrow.jfif'
import './../styles/pageone.css'

function Arrow(){

  return (
            <>
              <div className = "arrow-container">
                    <img className = "arrow-image" alt="arrow" src={arrow} />
                    <p>Load More</p>
              </div>
            </>
        )
  }

export default Arrow;

