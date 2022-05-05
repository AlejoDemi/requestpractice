import './Post.css'
import {useNavigate} from "react-router-dom";
import Spinner from "../Components/Spinner";
import {useGetUsersQuery} from "../api/apiSlice";



export default function PostedUsers(props) {
    const navigate = useNavigate();
    const { data }=useGetUsersQuery();


    const userInfo=(user)=>{
        window.localStorage.setItem("userId",JSON.stringify(user));
        navigate("/userData");
    }

    return (
        data ?
            <div className="card">
            <h3 className="tittle">Users</h3>
                    <div className="list">
                        {data.data.map((user,i) => <button className="item" key={user.id}
                                                       onClick={()=>userInfo(user.id)}>
                            {i+1}. {user.firstName + " "+user.lastName}</button>)}
                    </div>

            {
                data.data.length===0 ?
                    <h3 style={{fontFamily:"Exo"}}>No users were posted</h3>
                    :
                    null
            }

             </div>
            :
            <Spinner></Spinner>
    );
}