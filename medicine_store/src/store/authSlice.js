import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: null
    },
    reducers:{
        setUser: (state,action)=>{
            state.user = action.payload;
        },
        removeUser: (state,action)=>{
            state.user = null;
        },
    }
});

export const {setUser, removeUser} = authSlice.actions

export default authSlice.reducer; 