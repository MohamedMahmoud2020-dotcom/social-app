import React from "react";
import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import "./home.css";



function Home(){
    return (
        <section>
            <Topbar/>
            <div className="homeContainer">
                <SideBar/>
                <Feed/>
                <RightBar/>
            </div>
        </section>
    )
}

export default Home;