import React from "react";
import {AiFillLike} from "react-icons/ai";
import {FcLike} from "react-icons/fc";
import {FiMoreVertical} from "react-icons/fi";
import "./post.css";
import {Users} from "../../dummyData"
function Post(props){
    const [likes, setLikes] = React.useState(props.likes);
    const [isLiked, setIsLiked] = React.useState(false);

    function handleClick(){
        setLikes(isLiked ? likes-1 : likes+1);
        setIsLiked(!isLiked);
    }
    return(
        <div className="postContainer">
            <div className="postTop">
                <div className="postTop-top">
                    <div className="postTop-left">
                        <img src={Users.filter((u) => u.id === props.userId)[0].profilePicture}></img>
                        <h1>{Users.filter((u) => u.id === props.userId)[0].username}</h1>
                        <span>{props.date}</span>
                    </div>
                    <div className="postTop-right">
                        <FiMoreVertical style={{cursor:"pointer"}}/>
                    </div>
                </div>
                <p>{props.desc}</p>
            </div>
            <div className="postCenter">
                <img src={props.image}></img>
            </div>
            <div className="postBottom">
                <div className="postBottom-left">
                    <AiFillLike style={{cursor:"pointer"}} onClick={handleClick}/>
                    <FcLike style={{margin:"0 5px", cursor:"pointer"}}/>
                    <span>{likes} people liked it</span>
                </div>
                <div className="postBottom-right">
                    <span style={{cursor:"pointer"}}>{props.comments} Comments</span>
                </div>
            </div>
        </div>
    )
}

export default Post;