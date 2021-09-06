import { Component } from "react";
import data from './data.json'

class LatestStories extends Component{
    render(){
        return(
            <>
            <div className="article-hor"></div>
                {data.map((description) => {
                     return <div className="stories-card-container">
                        <h3>{description.headingArticle}</h3>
                        <p className="para1">{description.cardpara}</p> 
                        <h5 className="tech travel">{description.tech} &nbsp;&nbsp; 
                        <span>{description.date2}</span></h5> 
                    </div> 
                })}
            </>
        )
    }
}

export default LatestStories;