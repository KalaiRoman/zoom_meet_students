import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loginAuth:"",
    userDetails:{},
    token:localStorage.getItem("zoom_student_token")?JSON.parse(localStorage.getItem("zoom_student_token")):""
}
const Login_Reducer=createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        loginUserToken:(state,action)=>{
localStorage.setItem("zoom_student_token",JSON.stringify(action.payload))
        }
    }
})
export const {loginUserToken}=Login_Reducer.actions;
export default Login_Reducer.reducer;