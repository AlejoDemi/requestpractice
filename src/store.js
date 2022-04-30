import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "./Requests/UserSlice"

export default configureStore({
    reducer:{
        user:UserReducer
    }


})