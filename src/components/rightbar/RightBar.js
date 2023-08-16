import React from "react";
import "./rightBar.css"
import {Users} from "../../dummyData"

function RightBar(){
    return(
        <div className="rightBarContainer">
            <div className="rightBar-top">
                <img src="../assets/gift.png"></img>
                <span><strong>Pola Foster </strong>and <strong>3 other friends </strong>have a birthday today </span>
            </div>
            <div className="rightBar-middle">
                <img src="../assets/ad.png"></img>
            </div>
            <div className="rightBar-bottom">
                <p><strong>Online Friends</strong></p>
                {Users.map(u => (
                    <div className="rightBar-bottom-friend">
                        <div className="rightBar-bottom-friendImage">
                            <img src={u.profilePicture}></img>
                            <div className="rightBar-bottom-active"></div>
                        </div>
                        <span>{u.username}</span>
                    </div>
                ))}
                </div>
        </div>
    )
}


export default RightBar;