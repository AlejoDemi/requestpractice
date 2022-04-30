import './App.css';
import {
    Routes,
    Route,
} from 'react-router-dom';
import Post from "./Requests/Post";
import PostedUsers from "./Requests/PostedUsers";
import UserData from "./Requests/UserData";
import {useState} from "react";
import PostComments from "./Requests/PostComments";

function App() {

    const [data, setData] = useState();
    const [postId , setPostId] =useState();

    const dataSent = (data) => {
        setData(data);
        window.localStorage.setItem("user", JSON.stringify(data))
    }

    const getPostId= (postId) =>{
        setPostId(postId);
        window.localStorage.setItem("postId", JSON.stringify(postId))
    }

    return (
        <div className="App">


                <Routes>

                    <Route path="/"
                           element={<Post/>}/>

                    <Route path="/Posts"
                           element={<PostedUsers parentCallback={dataSent}/>}/>

                    <Route path="/UserData"
                           element={<UserData parentCallback={getPostId}/>}/>

                    <Route path="/Comments"
                           element={<PostComments/>}/>



                </Routes>
        </div>
    );
}

export default App;
