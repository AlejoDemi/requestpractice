
import {useEffect, useState} from "react";
import './Post.css'
import axios from "axios";


export default function PostedUsers() {

    const [users, setUsers] = useState([]);
    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'

    useEffect(() => {
        axios.get("https://dummyapi.io/data/v1/user?created=1", {
        })
            .then(function (response) {
                setUsers(response.data.data);
            })

    },[])



    return (
        <div className="card">
            <h3 className="tittle">Users Posted</h3>
            <div className="list">
                {users.map((user,i) => <div className="item" key={user.id}>{i+1}. {user.firstName + " "+user.lastName}</div>)}
            </div>
        </div>
    );
}