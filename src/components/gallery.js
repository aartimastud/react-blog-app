import React from 'react'
import './../styles/pageone.css'
import image1 from './../images/mountain1.png'
import image2 from './../images/mountain2.png'

function Gallery() {
    
    return (
        <>
            <div className = "main-container-1">
                    <div className="gallery-image">
                        <img className = "image image1" alt="gallery-1"  src = {image1} />  
                    </div>              
                    <div className = "sound-image">
                        <img className = "image image2" alt="gallery2\" src = {image2} />                
                        <img className = "image image2" alt="gallery-3" src = {image2} />               
                    </div> 
            </div>
        </>
    )
}

export default Gallery;
