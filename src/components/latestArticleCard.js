import React from 'react'
import article from './../images/article.png'
import data from './data.json'

function LatestArticleCard() {
    return (
        <>  
            <div className="article-hor"></div>    
            <div className = "article-card">
                            <div className = "article-image">
                                <img className="article-image" alt="article" src = {article}></img>
                            </div> 
                            {data.map((details) => {
                                return <>
                                    <div className = "article-text">
                                        <h3>{details.headingArticle}</h3>
                                        <p className="para1">{details.cardpara2}</p>
                                        <h5 className="travel">{details.travel} &nbsp;&nbsp; <span>{details.date}</span></h5>
                                    </div>
                                </>  
                    })}
            </div>
        </>
    )
}

export default LatestArticleCard;

