
import {useEffect, useState} from "react";
import './Post.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Spinner from "../Components/Spinner";
import {setUser} from "./UserSlice";
import {useDispatch} from "react-redux";



export default function PostedUsers(props) {

    const dispatch=useDispatch();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'

    useEffect(() => {
        axios.get("https://dummyapi.io/data/v1/user?limit=30", {
        })
            .then(function (response) {
                setUsers(response.data.data);
            })

    },[])

    const userInfo=(user)=>{
        dispatch(
            setUser(
                user
            )
        );
        navigate("/userData");
    }

    return (

        users?
            <div className="card">
            <h3 className="tittle">Users</h3>
                    <div className="list">
                        {users.map((user,i) => <button className="item" key={user.id}
                                                       onClick={()=>userInfo(user.id)}>
                            {i+1}. {user.firstName + " "+user.lastName}</button>)}
                    </div>

            {
                users.length===0 ?
                    <h3 style={{fontFamily:"Exo"}}>No users were posted</h3>
                    :
                    null
            }

             </div>
            :
            <Spinner></Spinner>
    );
}