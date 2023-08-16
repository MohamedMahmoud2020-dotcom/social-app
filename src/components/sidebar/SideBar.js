import React, { useState } from "react";
import "./sidebar.css"
import {BsFillChatLeftTextFill, BsFillBookmarkFill, BsQuestionCircle, BsBag} from "react-icons/bs";
import {AiFillPlayCircle} from "react-icons/ai";
import {MdGroup, MdOutlineEvent, MdRssFeed} from "react-icons/md";
import {FaGraduationCap} from "react-icons/fa";
import {Users} from "../../dummyData.js";
function SideBar(){
    return(
        <div className="sideBarContainer">
            <div className="sideBar-components">
                <div className="sideBar-component">
                    <MdRssFeed style={{fontSize:"25px"}}/>
                    <span>Feed</span>
                </div>
                <div className="sideBar-component">
                    <BsFillChatLeftTextFill style={{fontSize:"25px"}}/>
                    <span>Chats</span>
                </div>
                <div className="sideBar-component">
                    <AiFillPlayCircle style={{fontSize:"25px"}}/>
                    <span>Videos</span>
                </div>
                <div className="sideBar-component">
                    <MdGroup style={{fontSize:"25px"}}/>
                    <span>Groups</span>
                </div>
                <div className="sideBar-component">
                    <BsFillBookmarkFill style={{fontSize:"25px"}}/>
                    <span>Bookmarks</span>
                </div>
                <div className="sideBar-component">
                    <BsQuestionCircle style={{fontSize:"25px"}}/>
                    <span>Questions</span>
                </div>
                <div className="sideBar-component">
                    <BsBag style={{fontSize:"25px"}}/>
                    <span>Jobs</span>
                </div>
                <div className="sideBar-component">
                    <MdOutlineEvent style={{fontSize:"25px"}}/>
                    <span>Events</span>
                </div>
                <div className="sideBar-component">
                    <FaGraduationCap style={{fontSize:"25px"}}/>
                    <span>Courses</span>
                </div>
                <div className="sideBar-button">
                    <button>Show More</button>
                </div>
            </div>
            <hr></hr>
            <div className="sideBar-groupPeaple">
                {Users.map((user, index) => (
                    <div>
                        <img src={user.profilePicture}></img>
                        <span>{user.username}</span>
                    </div> 
                ))}
            </div>
        </div>
    )
}


export default SideBar;