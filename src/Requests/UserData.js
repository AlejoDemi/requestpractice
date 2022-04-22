import "./UserData.css"
import {RiDeleteBinLine} from "react-icons/ri";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function UserData(props){

    axios.defaults.headers.delete['app-id'] = '62583dbf4929562cb9e6a8f3'
    const navigate=useNavigate();
    const user=props.user;

    const deleteUser=()=>{
        axios.delete("https://dummyapi.io/data/v1/user/:id",{
            params:{
                id:user.id
            }
        })

            .then(
                function (){
                    navigate("/Posts")
                }
            )

    }

    return(
        <div className="dataCard">
            <div className="info">
                <img className="picture" src={user.picture} alt={"profile"}></img>
                <h3 className="name">{user.title+". "+user.firstName +" "+user.lastName}</h3>
            </div>
            <div>
                <RiDeleteBinLine className="icon" size={30}
                                  onClick={deleteUser}></RiDeleteBinLine>
            </div>

        </div>
    )
}