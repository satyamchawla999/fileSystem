import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userData:{}
};

// userSlice for storing current user info

// reducers 
// 1) setUser for setting up currentUser 
// 2) setUserData for setting data of current user
// 3) deleteUser for deleting data and setUser to false

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers : {
        setUserData : (state,action)=>{
            state.userData = action.payload;
        },
        deleteUser : (state)=>{
            state.user = false;
            state.userData = {};
        }
    }
});

export const {deleteUser,setUserData} = userSlice.actions;

export default userSlice.reducer;