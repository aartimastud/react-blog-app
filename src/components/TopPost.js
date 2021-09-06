import { Component } from "react";
import './../styles/pageone.css'
import post from './../images/post.png'
import LatestArticleCard from "./latestArticleCard";
import data from './data.json'

class TopPost extends Component{

    render(){
        return(
            <>
                <div className = "top-post-container" id="home-top-post">
                    {data.map((details) => {
                        return <>
                            <h5 className="post-heading">{details.heading3}</h5> 
                        </> 
                    })}
                    <div className="post-red-horizontal red-horizontal"></div>

                    <div>
                        <img className='post-image' alt="post-img" src={post} />
                    </div>
                    <div className="post-description">
                        {data.map((card) => {
                            return <>
                                <h3 class="post-heading2">{card.headingArticle}</h3>
                                <h5 className="travel post-travel">{card.travel} &nbsp;&nbsp; <span>{card.date}</span></h5> 
                            </> 
                        })}
                        <h1 className="number">1</h1>
                        
                    </div>
                    <div class="three-para">
                    <LatestArticleCard/><h1 className="number1">2</h1>
                    <LatestArticleCard /><h1 className="number1">3</h1>
                    <LatestArticleCard /><h1 className="number1">4</h1>
                    </div>

                </div>
                
            </>

        )
    }
}

export default TopPost;