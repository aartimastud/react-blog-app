import {Component} from 'react'
import Header from './Header';
import './../styles/pageone.css'
import './../styles/home.css'
import data from './data.json'
import LatestArticleCard from './latestArticleCard';
import TopPost from './TopPost';
import Arrow from './arrow';


class Pageone extends Component {
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

                <div className = "bol-article-container">
                    {data.map((details) => {
                        return <>
                            <h5 className="latest-heading">{details.list2}</h5> 
                        </> 
                    })}
                </div>
                <div className="bol-latest-red-horizontal red-horizontal"></div>
                <div className = "main-image-container">
                    <LatestArticleCard/>
                    <LatestArticleCard/>
                    <LatestArticleCard/>
                    <LatestArticleCard/>
                    <LatestArticleCard/>
                    <LatestArticleCard/>
                    <LatestArticleCard/>
                    <Arrow/>
                </div>
                <div className="advert">
                    <h3 className="adv-text">Advertistement</h3>
                </div>
                <div className="bol-container">
                    <TopPost/>
                </div>
            </>
        )
    }

}

export default Pageone;
