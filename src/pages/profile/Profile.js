import React from "react";
import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/SideBar";
import Share from "../../components/share/Share";
import RightBar from "../../components/rightbar/RightBar";
import Feed from "../../components/feed/Feed";
import "./profile.css";
function Profile(){
    return (
        <div>
            <Topbar/>
            <div className="profileContainer">
                <div className="profileContainer-left"> 
                <SideBar/>
                </div>
                <div className="profileContainer-right">
                    <div className="profileContainer-right-top">
                        <div className="profileCoverImage">
                            <img src="assets/post/3.jpeg"></img>
                            <div className="profileUserImage">
                                <img src="assets/person/7.jpeg"></img>
                             </div>
                        </div>
                        <div className="profileName">
                            <h1>Safak Kocaoglu</h1>
                            <p>Hello my friends!</p>
                        </div>
                    </div>
                    <div className="profileContainer-right-bottom">
                        <div className="profileContainer-right-bottom-left">
                            <Feed/>
                        </div>
                        <div className="profileContainer-right-bottom-right">
                            <div className="profileContainer-right-bottom-rightTop">
                                <h3>User information</h3>
                                <p>City:&emsp;New York</p>
                                <p>From:&emsp;Mardid</p>
                                <p>Relationship:&emsp;Single</p>
                            </div>
                            <div className="profileContainer-right-bottom-rightBottom">
                                <h3>User Friends</h3>
                                <div className="userFriends-container">
                                    <div className="userFriend-box">
                                        <img src="assets/person/1.jpeg"></img>
                                        <p>John Carter</p>
                                    </div>
                                    <div className="userFriend-box">
                                        <img src="assets/person/2.jpeg"></img>
                                        <p>John Carter</p>
                                    </div>
                                    <div className="userFriend-box">
                                        <img src="assets/person/3.jpeg"></img>
                                        <p>John Carter</p>
                                    </div>
                                    <div className="userFriend-box">
                                        <img src="assets/person/4.jpeg"></img>
                                        <p>John Carter</p>
                                    </div>
                                    <div className="userFriend-box">
                                        <img src="assets/person/5.jpeg"></img>
                                        <p>John Carter</p>
                                    </div>
                                    <div className="userFriend-box">
                                        <img src="assets/person/6.jpeg"></img>
                                        <p>John Carter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profile;