import "./UserData.css"
import {RiDeleteBinLine} from "react-icons/ri";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {SpinnerRoundFilled} from "spinners-react";
import {AiOutlineLike} from "react-icons/ai";
import {Button} from "react-bootstrap";


export default function UserData(props){

    axios.defaults.headers.delete['app-id'] = '62583dbf4929562cb9e6a8f3'
    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'
    const navigate=useNavigate();
    const userID = JSON.parse(window.localStorage.getItem("user"))
    const [user,setUser]=useState();
    const [posts,setPosts] =useState([]);



    const deleteUser=()=>{
        axios.delete("https://dummyapi.io/data/v1/user/"+userID)

            .then(
                function (){
                    navigate(-1)
                }
            )

    }

    const goToComments=(post)=>{//preguntarle a fede
        props.parentCallback(post.id)
        navigate("/Comments")
    }


    useEffect(() => {
        axios.get("https://dummyapi.io/data/v1/user/" + userID)
            .then(function (response) {
                setUser(response.data);
            })
        axios.get("https://dummyapi.io/data/v1/user/" + userID + "/post")
            .then(function (response) {
                setPosts(response.data.data);
            })
    }, []);



    return(
        <div className="container">
            {
                user ?
                <div className="dataCard">
                    <div className="info">
                        <RiDeleteBinLine className="icon" size={30}
                                         onClick={deleteUser}></RiDeleteBinLine>
                                <img className="picture" src={user.picture || ""} alt={"no profile picture"}></img>
                        <div style={{margin:"auto"}}>
                            <h3 className="name">{user.firstName +" "+user.lastName}</h3>
                            <h4 style={{margin:"auto"}}>id: {user.id}</h4>
                        </div>

                    </div>
                    <div>

                    </div>



                </div>
                    :
                    <div style={{display:"flex", alignContent:"center",height:"100vh"}}>
                        <SpinnerRoundFilled style={{alignSelf:"center",margin:"auto"}} size={100} thickness={100} speed={100} color="black" />
                    </div>

            }

                {
                 posts?
                     <div className={"post"}>
                             {posts.map((post)=>
                                 <Button key={post.image} className="box" onClick={()=>goToComments(post)}>
                                    <img src={post.image} alt={"image"}/>
                                 </Button>)}
                     </div>
                    :
                    <div style={{display:"flex", alignContent:"center",height:"100vh"}}>
                    <SpinnerRoundFilled style={{alignSelf:"center",margin:"auto"}} size={100} thickness={100} speed={100} color="black" />
                    </div>
                }

        </div>

    )
}