import {createSlice} from "@reduxjs/toolkit";

const initialState="";

export const UserSlice=createSlice({
    name:"User",
    initialState,
    reducers:{
        setUser(state,action){
            state=action.payload;
        }
    }

})

export const {setUser}=UserSlice.actions

export default UserSlice.reducer;