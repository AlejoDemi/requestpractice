import './App.css';
import {
    Routes,
    Route,
} from 'react-router-dom';
import Post from "./Requests/Post";
import PostedUsers from "./Requests/PostedUsers";
import UserData from "./Requests/UserData";

function App() {

    return (
        <div className="App">
                <Routes>

                    <Route path="/"
                           element={<Post/>}/>

                    <Route path="/Posts"
                           element={<PostedUsers/>}/>

                    <Route path="/UserData"
                           element={<UserData/>}/>




                </Routes>
        </div>
    );
}

export default App;
