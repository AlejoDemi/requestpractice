import {useEffect, useState} from "react";
import axios from "axios";
import {AiOutlineClose, AiOutlineCloseCircle, AiOutlineLike} from "react-icons/ai";
import "./PostComments.css"
import {SpinnerRoundFilled} from "spinners-react";
import {useNavigate} from "react-router-dom";
import 'animate.css';
import Spinner from "../Components/Spinner";
import {useGetCommentsByPostIdQuery} from "../api/apiSlice";


export default function PostComments(props){

    const postID=JSON.parse(window.localStorage.getItem("postId"));
    const {data}=useGetCommentsByPostIdQuery(postID);
    axios.defaults.headers.common['app-id']= '62583dbf4929562cb9e6a8f3';
    const [post ,setPost] = useState();
    const navigate=useNavigate();


    useEffect(()=>{
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
                (post && data) ?

                <div className={"pictureContainer"}>
                    <div className="picture">
                        <img  src={post.image}/>
                        <div style={{display:"flex",flexDirection:"row",margin:"auto", justifyContent:"center"}}>
                            <div style={{display:"flex",flexDirection:"row",width:"80px",justifyContent:"flex-start"}}>
                                <h2 style={{alignSelf:"center"}}>{post.likes}</h2>
                                <AiOutlineLike  className="icon" style={{height:"30px",width:"30px"}}></AiOutlineLike>
                            </div>
                            <div style={{display:"flex",width:"500px"}}>
                                <h3 style={{fontSize:"auto",margin:"auto"}}>{post.text}</h3>
                            </div>

                        </div>
                    </div>
                    <div className="comments">
                        <div style={{display:"flex",justifyContent:"flex-end",margin:"0 0 0 auto"}}>
                            <AiOutlineCloseCircle  onClick={goBack} size={35} className="icon"></AiOutlineCloseCircle>
                        </div>

                        <h1 style={{color:"lightgrey"}}>Comments</h1>
                        {data.data.length>0?
                        data.data.map((comment)=>
                            <h3 key={comment.id} style={{color:"lightgray"}}>- {comment.message}</h3>)
                            :
                            <h4 style={{color:"lightgrey"}}>No comments here...</h4>}
                    </div>

                </div>
                    :
                 <Spinner></Spinner>

            }
        </div>
    )
}