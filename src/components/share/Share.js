import React from "react";
import "./share.css";
import {IoMdPhotos} from "react-icons/io";
import {BiTagAlt} from "react-icons/bi";
import {GoLocation} from "react-icons/go";
import {BsEmojiSmile} from "react-icons/bs";
function Share(){
    return (
        <div className="shareContainer">
            <div className="shareTop">
                <img src="../assets/person/1.jpeg" alt="profileImage"></img>
                <input placeholder="what's in your mind Safak?"></input>
            </div>
            <hr className="shareLine"></hr>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <IoMdPhotos style={{color:"red"}}/>
                        <span>Photos or Vidoes</span>
                    </div>
                    <div className="shareOption">
                        <BiTagAlt style={{color:"blue"}}/>
                        <span>Tag</span>
                    </div>
                    <div className="shareOption">
                        <GoLocation style={{color:"green"}}/>
                        <span>Location</span>
                    </div>
                    <div className="shareOption">
                        <BsEmojiSmile style={{color:"yellow"}}/>
                        <span>Feelings</span>
                    </div>
                </div>
                <div className="shareButton">
                    <button>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share;