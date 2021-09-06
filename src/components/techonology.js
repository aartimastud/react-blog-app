import { Component } from "react";
import './../styles/pageone.css'
import './../styles/technology.css'
import React from './../images/react.png'
import code from './../images/code.png'
import share from './../images/share.png'
import Person from "./person";
import data from './data.json'
import LatestPersonCard from "./latestPersonCard";
import Clap from "./clap";
import MobileLatestCard from "./mobileLatestCard";

class Techbology extends Component{

    state = {
        animationPara : `Animation in ReactJs app is a popular topic and there
                are many ways to create different types of animations. many developers
                create animation exclusively using css and adding classes to HTML tags.
                This is a great way and you should use it. if you want to create complex 
                animations you can pay attentions to GreenSock. GrennSock is the most 
                powerful animation platform. There are also a lot of libraries, components
                for creating animation in react`,
        paraPart2 : `Lets talk about them`,
        name : "Dmitry Nozhenk",
        dateTime : `10 jan,2021 28min read`
    }

    render(){
        return(
            <>
                <div class="main-header-container">
                    <div className="header">
                        <h5 className="the">The </h5>
                        <h2 className="siren">Siren</h2>
                    </div>
                        <button className="heading-get">Get Started</button>
                    <div className="ani-hor"></div>
                </div>  

            <div className="left-clap-conatiner">
                <Clap />
                <div className="share-container">
                    <img id="share-image" src={share} alt="share-img"/>
                    <p className="share">share this article</p>
                </div>
            </div> 
              
            <div className = "animation-main-container">
                    {data.map((details) => {
                        return <h3>{details.techHeading}</h3> 
                    })}
                    <Person />     

                    <img id="react-image" src={React} alt="react-img"/>
                    <p>{this.state.animationPara}</p>
                    <p>{this.state.paraPart2}</p>
                    <img id="code" src={code} alt="code-img"/>

                <div class="box">
                    <button id="react-box">React</button>
                    <button id="javascript-box">Javascript</button>
                    <button id="animation-box">Animation</button>
                </div>    
                <Clap />
                <div>
                    <div className="hor-line"></div>
                   <p className="written">Written By</p>
                   <Person />
                   <div className="hor-line hor"></div>
                </div>
            </div>

                <div className="animation-card-conatiner">
                    <h5>More From the siren</h5>
                    <div className="hor-line card"></div>
                    <div className="text-div">
                        <p className="text1">Also Tagged ReactJs</p>
                        <p className="text2">related reads</p>
                        <p className="text3">related read</p>
                    </div>
                    <div className="latest-container">
                        <LatestPersonCard />
                        <LatestPersonCard />
                        <LatestPersonCard />
                    </div>
                    <div className="mobile-latest-container">
                        <MobileLatestCard />
                        <MobileLatestCard />
                        <MobileLatestCard />
                        <MobileLatestCard />
                    </div>
                </div>
                
            </>

        )
    }
}

export default Techbology;