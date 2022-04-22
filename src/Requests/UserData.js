import "./UserData.css"
import {RiDeleteBinLine} from "react-icons/ri";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {AiTwotoneHeart} from "react-icons/ai";
import {SpinnerRoundFilled} from "spinners-react";


export default function UserData(props){

    axios.defaults.headers.delete['app-id'] = '62583dbf4929562cb9e6a8f3'
    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'
    const navigate=useNavigate();
    //const user=props.user;
    const user = JSON.parse(window.localStorage.getItem("user"))
    const [loadingPosts,setLoadingPosts]= useState(true)
    const [posts,setPosts] =useState([]);
    const [images, setImages] = useState([]);
    const [showImages,setShowImages]=useState(false);

    const deleteUser=()=>{
        axios.delete("https://dummyapi.io/data/v1/user/"+user.id)

            .then(
                function (){
                    navigate(-1)
                }
            )

    }
    useEffect(() => {
        axios.get("https://dummyapi.io/data/v1/user/" + user.id + "/post")
            .then(function (response) {
                setLoadingPosts(false);
                setPosts(response.data.data);
            })

    },[])

    const fillImages=()=>{
        posts.map((postImage)=> images.push(postImage.image));
        setImages(images);
        console.log(images)
        setShowImages(true)
    }


    return(
        <div className="container">
            <div className="dataCard">
                <div className="info">
                    <RiDeleteBinLine className="icon" size={30}
                                     onClick={deleteUser}></RiDeleteBinLine>
                    {
                        user.picture!==undefined?
                            <img className="picture" src={user.picture} alt={"no profile picture"}></img>
                            :
                            null
                    }

                    <div style={{margin:"auto"}}>
                        <h3 className="name">{user.firstName +" "+user.lastName}</h3>
                        <h4 style={{margin:"auto"}}>id: {user.id}</h4>
                    </div>

                </div>
                <div>

                </div>

                {
                    loadingPosts?
                        <div className="list">
                            <SpinnerRoundFilled style={{alignSelf:"center"}} size={50} thickness={100} speed={100} color="black" />
                        </div>
                        :
                        <div className="list">
                                    <button onClick={()=>fillImages()} style={{
                                        fontFamily:"MuseoModerno",
                                        fontSize:"20px",border:"none",
                                        background:"transparent",
                                        textDecoration:"underline",
                                        cursor:"pointer"
                                    }}>Show posts</button>
                        </div>


                }

            </div>


                {
                 showImages?
                     <div className={"post"}>
                         <div className="gallery">
                             {images.map((image)=> <img key={image} src={image} alt={"image"}/>)}/>
                         </div>
                     </div>
                    :
                    null
                }

        </div>

    )
}