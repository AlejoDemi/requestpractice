import {useEffect, useState} from "react";
import axios from "axios";
import {AiOutlineClose, AiOutlineCloseCircle, AiOutlineLike} from "react-icons/ai";
import "./PostComments.css"
import {SpinnerRoundFilled} from "spinners-react";
import {useNavigate} from "react-router-dom";
import 'animate.css';


export default function PostComments(props){

    const postID=JSON.parse(window.localStorage.getItem("postId"));
    const [postComments ,setPostComments] = useState([]);
    const [post ,setPost] = useState();
    const navigate=useNavigate();

    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'

    useEffect(()=>{
        axios.get("https://dummyapi.io/data/v1/post/" + postID + "/comment")
            .then(function (response) {
                setPostComments(response.data.data);
                console.log(response.data.data)
            })
        axios.get("https://dummyapi.io/data/v1/post/"+postID)
            .then(function (response){
                setPost(response.data);

            })
    },[]);


    const goBack=()=>{
            navigate(-1);
    };

    return(
        <div>

            {
                (post && postComments) ?

                <div className={"pictureContainer animate__hinge"}>
                    <div className="picture">
                        <img  src={post.image}/>
                        <div style={{display:"flex",flexDirection:"row",margin:"auto", justifyContent:"center"}}>
                            <div style={{display:"flex",flexDirection:"row",width:"20%",justifyContent:"flex-start"}}>
                                <h2>{post.likes}</h2>
                                <AiOutlineLike  className="icon" size={30}></AiOutlineLike>
                            </div>
                            <h3 style={{margin:"auto auto auto 20px "}}>{post.text}</h3>
                        </div>
                    </div>
                    <div className="comments">
                        <div style={{display:"flex",justifyContent:"flex-end",margin:"0 0 0 auto"}}>
                            <AiOutlineCloseCircle  onClick={goBack} size={35} className="icon"></AiOutlineCloseCircle>
                        </div>

                        <h1>Comments</h1>
                        {postComments.length>0?
                        postComments.map((comment)=>
                            <h3 key={comment.id}>- {comment.message}</h3>)
                            :
                            <h4>No comments here...</h4>}
                    </div>

                </div>
                    :
                    <div style={{display:"flex", alignContent:"center",height:"100vh"}}>
                        <SpinnerRoundFilled style={{alignSelf:"center",margin:"auto"}} size={100} thickness={100} speed={100} color="black" />
                    </div>

            }
        </div>
    )
}