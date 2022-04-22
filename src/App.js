import './App.css';
import {
    Routes,
    Route,
} from 'react-router-dom';
import Post from "./Requests/Post";
import PostedUsers from "./Requests/PostedUsers";
import UserData from "./Requests/UserData";
import {useState} from "react";

function App() {

    const [data, setData] = useState();

    const dataSent = (data) => {
        setData(data);
        window.localStorage.setItem("user", JSON.stringify(data))
    }

    return (
        <div className="App">
                <Routes>

                    <Route path="/"
                           element={<Post/>}/>

                    <Route path="/Posts"
                           element={<PostedUsers parentCallback={dataSent}/>}/>

                    <Route path="/UserData"
                           element={<UserData/>}/>




                </Routes>
        </div>
    );
}

export default App;
