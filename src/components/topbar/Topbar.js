import React from "react";
import {BsFillPersonFill, BsSearch} from 'react-icons/bs';
import {MdOutlineMessage} from "react-icons/md";
import {IoMdNotifications} from "react-icons/io";
import "./topbar.css";
function Topbar(){
    return (
        <nav>
            <div className="topbar_left">
                <h1>Lamasocial</h1>
            </div>
            <div className="topbar_center">
                <div className="searchBar">
                    <div className="searchIcon"><BsSearch style={{marginRight:"0.4rem"}}/></div>
                    <input placeholder="Search for friends, post or video"></input>
                </div>
                <a>Homepage</a>
                <a>Timeline</a>
            </div>
            <div className="topbar_right">
                <div className="topbar_right-icons">
                    <div className="icon"><BsFillPersonFill style={{fontSize:"25px", marginRight:"1.5rem"}}/><div className="icon_notfi">1</div> </div>
                    <div className="icon"><MdOutlineMessage style={{fontSize:"25px", marginRight:"1.5rem"}}/><div className="icon_notfi">2</div> </div>
                    <div className="icon"><IoMdNotifications style={{fontSize:"25px", marginRight:"1.5rem"}}/><div className="icon_notfi">3</div> </div>
                </div>
                <div className="topbar_right-image">
                    <img src="./assets/person/1.jpeg" alt="PersonalImage"></img>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;