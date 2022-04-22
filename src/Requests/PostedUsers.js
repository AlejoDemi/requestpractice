
import {useEffect, useState} from "react";
import './Post.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function PostedUsers(props) {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'

    useEffect(() => {
        axios.get("https://dummyapi.io/data/v1/user?limit=25", {
        })
            .then(function (response) {
                setLoading(false);
                setUsers(response.data.data);
                console.log(response.data.data)
            })

    },[])

    const userInfo=(user)=>{
        props.parentCallback(user)
        navigate("/userData");
        console.log(user.firstName)
    }

    return (
        <div className="card">
            <h3 className="tittle">Users Posted</h3>
            {
                loading ?
                    <div className="spinner-container">
                        <div className="loading-spinner">
                        </div>
                    </div>
                    :
                    <div className="list">
                        {users.map((user,i) => <button className="item" key={user.id}
                                                       onClick={()=>userInfo(user)}>
                            {i+1}. {user.firstName + " "+user.lastName}</button>)}
                    </div>
            }

        </div>
    );
}