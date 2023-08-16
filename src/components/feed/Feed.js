import React from "react";
import "./feed.css"
import Share from "../share/Share";
import Post from "../post/Post";
import {Posts} from "../../dummyData";
function Feed(){
    return(
        <div className="feedContainer">
            <Share/>
            {Posts.map(p =>(
                <Post desc={p.desc} image={p.photo} likes={p.like} comments={p.comment} date={p.date} userId={p.userId}/>
            ))}
        </div>
    )
}


export default Feed;