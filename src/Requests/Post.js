
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {useState} from "react";

export default function Post(){

    const navigate = useNavigate()
    axios.defaults.headers.post['app-id'] = '62583dbf4929562cb9e6a8f3'
    axios.defaults.headers.delete['app-id'] = '62583dbf4929562cb9e6a8f3'
    const [firstName,serFirstName] = useState('Juan');
    const [lastName,serLastName] = useState('Perez');
    const [email,serEmail] = useState('juanP@gmail.com');



    const goToPosts =()=>{
        navigate('/posts');

    }

    const postNewUser =()=>{
        if(firstName.length===0 || lastName.length===0 || email.length===0)return;
        axios({
            method: 'post',
            url: "https://dummyapi.io/data/v1/user/create",
            data: {
                firstName: firstName,
                lastName: lastName,
                email:email,
            }
        });
    }

    return(
        <div>
            <h2>Post a user!</h2>
            <div>
                <label>firstName</label>
                <input type="text"/>
            </div>
            <div>
                <label>lastName</label>
                <input type="text"/>
            </div>
            <div>
                <label>email</label>
                <input type="text"/>
            </div>
            <span>
                <button onClick={postNewUser}>post user</button>
                <button onClick={goToPosts}>see all posts</button>
            </span>


        </div>
    )




    // )


}