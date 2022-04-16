
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {useState} from "react";
import './Post.css'

export default function Post(){

    const navigate = useNavigate()
    axios.defaults.headers.post['app-id'] = '62583dbf4929562cb9e6a8f3'
    axios.defaults.headers.delete['app-id'] = '62583dbf4929562cb9e6a8f3'
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');



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
        <div className="card">
            <h2>Post a user!</h2>
            <div className="card--input">
                <label className="card--input--label">firstName</label>
                <input className="card--input--box"
                       type="text"
                       placeholder="enter first name..."
                       onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div className="card--input">
                <label className="card--input--label">lastName</label>
                <input className="card--input--box"
                       type="text"
                       placeholder="enter last name..."
                       onChange={e => setLastName(e.target.value)}/>
            </div>
            <div className="card--input">
                <label className="card--input--label">email</label>
                <input className="card--input--box"
                       type="text"
                       placeholder="enter email..."
                       onChange={e => setEmail(e.target.value)}/>
            </div>
            <span>
                <button className="card--button"
                        onClick={postNewUser}>post user</button>
                <button className="card--button"
                        onClick={goToPosts}>see all posts</button>
            </span>


        </div>
    )




    // )


}