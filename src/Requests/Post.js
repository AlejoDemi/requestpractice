import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {useState} from "react";
import './Post.css';
import 'animate.css';

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

        <div className= "card">
            <h2 className="tittle">Post a user!</h2>
            <div className="input">
                <label className="label">First name</label>
                <input className="box"
                       type="text"
                       placeholder="enter first name..."
                       onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div className="input">
                <label className="label">Last name</label>
                <input className="box"
                       type="text"
                       placeholder="enter last name..."
                       onChange={e => setLastName(e.target.value)}/>
            </div>
            <div className="input">
                <label className="label">email</label>
                <input className="box"
                       type="email"
                       placeholder="enter email..."
                       onChange={e => setEmail(e.target.value)}/>
            </div>
            <span>
                <button className="button"
                        onClick={postNewUser}>Post</button>
                <button className="button"
                        onClick={goToPosts}>View </button>
            </span>


            </div>
    )




    // )


}