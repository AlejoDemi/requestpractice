import "./UserData.css"
import {RiDeleteBinLine} from "react-icons/ri";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import Spinner from "../Components/Spinner";
import {useSelector} from "react-redux";


export default function UserData(props){

    axios.defaults.headers.delete['app-id'] = '62583dbf4929562cb9e6a8f3'
    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'
    const navigate=useNavigate();
    const userID=JSON.parse(window.localStorage.getItem("userID"));
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

    const goToComments=(post)=>{
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

        user && posts ?
        <div className="container">
                <div className="dataCard">
                    <div className="info">
                        <RiDeleteBinLine className="icon" size={30}
                                         onClick={deleteUser}></RiDeleteBinLine>
                                <img className="picture" src={user.picture || ""} alt={"no profile picture"}></img>
                        <div style={{margin:"auto"}}>
                            <h3 className="name">{user.firstName +" "+user.lastName}</h3>
                            <h4 style={{margin:"auto",color:"white"}}>id: {user.id}</h4>
                        </div>

                    </div>
                    <div>

                    </div>



                </div>
            <div className={"post"}>
                             {posts.map((post)=>

                                 <Button key={post.image} className="box" onClick={()=>goToComments(post)}>
                                    <img src={post.image} alt={"image"}/>
                                 </Button>)}
                     </div>



        </div>
            :
            <Spinner/>

    )
}