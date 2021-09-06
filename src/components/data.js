import React from 'react'
import Header from './header';
import './../styles/pageone.css'
import image1 from './../images/image1.jfif'
import image2 from './../images/image2.jfif'
import TheLatest from './theLatest';
import LatestArticle from './latestArticle';
import { Component } from 'react/cjs/react.production.min';
import TopPost from './TopPost';
import LatestStories from './LatestStories';

class Pageone extends Component {

    state = {
        subHeading :`Joshua Tree Overnight Adventure`,
        cardPara : `Gujrat is vastly underrated and it's a mystery to 
                    us why the region isn't more well-known as a tourist 
                    destination. it has a plethora of temples and places`,
        travel : "Travel",
        date : "/ August 21 2027",
        articleHeading : 'Catch waves with an adventre guide',
        storiesPara: `Gujrat is vastly underrated and it's a mystery to 
                     us why the region isn't more well-known as a tourist 
                     destination. it has a plethora of temples and places
                     Gujrat is vastly underrated and it's a mystery to us why
                     the region isn't more well-known as a tourist destination.
                     It has a plethora of temples and places `
      }
  

    render(){
        return (
            <>
                <Header />
                <div className = "main-container-1">
                    <div className="gallery-image">
                        <img className = "image image1" alt= "gallery-image" src = {image1} />  
                    </div>              
                    <div className = "sound-image">
                        <img className = "image image2" alt= "sound-image"  src = {image2} />                
                        <img className = "image image2" alt= "sound-image" src = {image2} />               
                    </div> 
                </div>
                <TheLatest />
                <LatestArticle travel = {this.state.travel}
                            date = {this.state.date}/>
                <TopPost articleHeading = {this.state.articleHeading} 
                         travel = {this.state.travel} 
                         date = {this.state.date} />
                <LatestStories articleHeading = {this.state.articleHeading} 
                            storiesPara = {this.state.storiesPara} 
                            travel = {this.state.travel}
                            date = {this.state.date}/>
                
            </>
        )
    }
    
}

export default Pageone;
