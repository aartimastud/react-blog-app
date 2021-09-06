import {Component} from 'react'
import Header from './Header';
import './../styles/pageone.css'
import './../styles/mainmobile.css'
import Gallery from './gallery';
import TheLatestCard from './theLatestCard';
import data from './data.json'
import LatestArticleCard from './latestArticleCard';
import TopPost from './TopPost';
import LatestStories from './LatestStories';
import TopPostImage from './post-big-image';


class Mainmobile extends Component {
    state = {
        heading: "Joshua Tree Overnight Adventure",
        cardPara : `Gujrat is vastly underrated and it's a mystery to 
                   us why the region isn't more well-known as a tourist 
                 destination. it has a plethora of temples and places`,
        travel : "Travel",
        date : "/ August 21 2027",
        heading2: "Catch Waves with an adventures Guide",
        cardpara2: `Gujrat is vastly underrated and it's a mystery to 
                    us why the region isn't more well-`
    }
    
    render(){
        return (
            <>
                <Header />
                <Gallery />
                
                <div className="latest-main-container">
                    {data.map((details) => {
                        return <>
                            <h5 className="latest-heading">{details.heading1}</h5> 
                    </>  
                    })}

                    <div className="red-horizontal"></div>

                    <div className="card-latest">
                        <TheLatestCard cardPara ={this.state.cardPara}/>
                        <TheLatestCard cardPara ={this.state.cardPara}/>
                        <TheLatestCard cardPara ={this.state.cardPara}/>
                    </div>
                
                </div>

                <div className = "article-container">
                    {data.map((details) => {
                        return <>
                            <h5 className="latest-heading">{details.heading2}</h5> 
                        </> 
                    })}
                </div>
                <div className="latest-red-horizontal red-horizontal"></div>
                <div className = "main-image-container">
                    <LatestArticleCard/>
                    <LatestArticleCard/>
                    <LatestArticleCard/>
                    <LatestArticleCard/>
                </div>
                <div className="advert">
                    <h3 className="adv-text">Advertistement</h3>
                </div>
                <TopPost/>
                <TopPostImage />

                <div className="stories-container"> 
                    {data.map((details) => {
                        return <>
                            <h5 className="stories-heading">{details.heading4}</h5> 
                        </> 
                    })}
                    <div className="red-horizontal"></div>
                    <div className="stories-main-container">
                        <LatestStories />
                        <LatestStories />
                        <LatestStories />
                    </div>
                </div>
            </>
        )
    }

}

export default Mainmobile;
