
import {useEffect, useState} from "react";
import './Post.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {SpinnerRoundFilled} from "spinners-react";



export default function PostedUsers(props) {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'

    useEffect(() => {
        axios.get("https://dummyapi.io/data/v1/user?limit=30", {
        })
            .then(function (response) {
                setLoading(false);
                setUsers(response.data.data);
            })

    },[])

    const userInfo=(user)=>{
        props.parentCallback(user.id)
        navigate("/userData");
    }

    return (
        <div className="card">
            <h3 className="tittle">Users Posted</h3>
            {
                loading ?
                    <SpinnerRoundFilled style={{alignSelf:"center"}} size={50} thickness={100} speed={100} color="black" />
                    :
                    <div className="list">
                        {users.map((user,i) => <button className="item" key={user.id}
                                                       onClick={()=>userInfo(user)}>
                            {i+1}. {user.firstName + " "+user.lastName}</button>)}
                    </div>
            }
            {
                users.length===0 ?
                    <h3 style={{fontFamily:"Exo"}}>No users were posted</h3>
                    :
                    null
            }

        </div>
    );
}