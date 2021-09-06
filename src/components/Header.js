import React, { useState } from 'react'
import '../index.css'
import {NavLink} from "react-router-dom";
 
function Header() {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <>
            
            {/* <div class="main-header">
                <h5 className="heading-the">The </h5>
                <h2 className="heading-siren">Siren</h2>
                <div className="navbar" >
                <a href="./home.js">
                    <FaBars onClick={showSidebar} className="bars"/>
                </a>
            </div>
            </div>  

            
            <div>
                {data.map((details) => {
                    return <div className="nav-list">
                                    <NavLink className="list" to="/" >{details.list1}</NavLink>
                                    <NavLink className="list" to="/bollywood" >{details.list2}</NavLink>
                                    <NavLink className="list" to="/tech">{details.list3}</NavLink>
                                    <NavLink className="list" to="/bollywood">{details.list4}</NavLink>
                                    <NavLink className="list" to="/">{details.list5}</NavLink>
                                    <NavLink className="list" to="/tech">{details.list6}</NavLink>
                           </div>
                })}
            </div> */}

            <nav className="navbar">
                <h5 className="heading-the">The </h5>
                <h2 className="heading-siren">Siren</h2>
                <ul className={isMobile ? "nav-link-mobile" : "nav-links"} 
                onClick={() => setIsMobile(false)}>
                    <NavLink className="list" to="/" ><li>Home</li></NavLink>
                    <NavLink className="list" to="/bollywood" ><li>Bollywood</li></NavLink>
                    <NavLink className="list" to="/tech"><li>Technology</li></NavLink>
                    <NavLink className="list" to="/bollywood"><li>Hollywood</li></NavLink>
                    <NavLink className="list" to="/"><li>Fitness</li></NavLink>
                    <NavLink className="list" to="/tech"><li>Food</li></NavLink>
                </ul>
                <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)} 
                </button>
            </nav>

            <div className="horizontal-line"></div>
        
        </>
    )
}

export default Header;
