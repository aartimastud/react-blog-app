import { Component } from "react";
import './../styles/pageone.css'
import article from './../images/article.png'

class TopPostImage extends Component{

    render(){
        return(
            <>

                <div className="big-image" > 
                    <img id="home-big-image" src={article} alt="big-article-img"/>
                </div>
                
            </>

        )
    }
}

export default TopPostImage;