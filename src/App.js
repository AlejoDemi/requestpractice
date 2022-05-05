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


    return (
        <div className="App">


                <Routes>

                    <Route path="/"
                           element={<Post/>}/>

                    <Route path="/Posts"
                           element={<PostedUsers/>}/>

                    <Route path="/UserData"
                           element={<UserData />}/>

                    <Route path="/Comments"
                           element={<PostComments />}/>



                </Routes>
        </div>
    );
}

export default App;
