
import axios from "axios";
import {useNavigate} from 'react-router-dom'

export default function Post(){

    const navigate = useNavigate()
    axios.defaults.headers.post['app-id'] = '62583dbf4929562cb9e6a8f3'


    axios({
        method: 'post',
        url: "https://dummyapi.io/data/v1/user/create",
        data: {
            firstName: 'Alejo',
            lastName: 'Demitropulos',
            email:'alejoDemi3@alejo.com',
        }
    });


    const goToPosts =()=>{
        navigate('/posts');

    }

    return(
        <div>
            <h2>Post a user!</h2>
            <button onClick={goToPosts}>see all posts</button>
        </div>
    )




    // )


}