import "./UserData.css"
import axios from "axios";
import { useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import Spinner from "../Components/Spinner";
import { useGetPostsByUserIdQuery, useGetUserByIdQuery} from "../api/apiSlice";


export default function UserData(props){

    axios.defaults.headers.delete['app-id'] = '62583dbf4929562cb9e6a8f3'
    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'
    const userID=JSON.parse(window.localStorage.getItem("userId"));
    const { data }=useGetUserByIdQuery(userID);




    return(

        data  ?
        <div className="container">
                <div className="dataCard">
                    <div className="info">
                                <img className="picture" src={data.picture || ""} alt={"no profile picture"}></img>
                        <div style={{margin:"auto"}}>
                            <h3 className="name">{data.firstName +" "+data.lastName}</h3>
                            <h4 style={{margin:"auto",color:"white"}}>id: {data.id}</h4>
                        </div>

                    </div>
                    <div>

                    </div>



                </div>

                <Posts userId={userID}></Posts>


        </div>
            :
            <Spinner/>

    )
}

export const Posts =(props)=>{

    const {data : posts =[],} = useGetPostsByUserIdQuery(props.userId)
    console.log(posts)

    const navigate=useNavigate();

    const goToComments=(post)=>{
        window.localStorage.setItem("post",JSON.stringify(post))
        navigate("/Comments");
    }


    return(

        posts.data?
        <div className={"post"}>
            {posts.data.map((post)=>
                <Button key={post.image} className="box" onClick={()=>goToComments(post.id)}>
                    <img src={post.image} alt={"image"}/>
                </Button>)}
        </div>
            :
            <Spinner/>
    );
}