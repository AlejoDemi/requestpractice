import axios from "axios";
import {useState} from "react";


export default function PostedUsers(){

    const [users, setUsers] = useState([]);
    axios.defaults.headers.get['app-id'] = '62583dbf4929562cb9e6a8f3'

    const listPosts = users.map((user) =>  <li>{user.email}</li>);

    axios.get("https://dummyapi.io/data/v1/user?created=1", {
        params: {
            firstName:"Alejo"
        }
    })
        .then(function(response){
            setUsers(response.data);
        })

    return(
        <div>
            <h3>Users Posted</h3>
            <ul>
                {listPosts}
            </ul>
        </div>
    );
}