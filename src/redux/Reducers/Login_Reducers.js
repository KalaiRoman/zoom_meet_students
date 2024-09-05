import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loginAuth:"",
    userDetails:{},
}
const Login_Reducer=createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        loginUser:(state,action)=>{

        }
    }
})
export const {loginUser}=Login_Reducer.actions;
export default Login_Reducer.reducer;