import axios from "axios";
import {useState} from "react";


export default function PostedUsers() {

    const [users, setUsers] = useState([]);
    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'


    axios.get("https://dummyapi.io/data/v1/user?created=1", {
    })
        .then(function (response) {
            setUsers(response.data.data);
        })

    return (
        <div>
            <h3>Users Posted</h3>
            <ol>
                {users.map((user) => <li key={user.id}>{user.firstName + " "+user.id}</li>)}
            </ol>
        </div>
    );
}