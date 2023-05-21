import {PayloadAction, createSlice ,Dispatch} from "@reduxjs/toolkit";
import { AuthApi } from "../../api/api";

let idInstance = '1101823204'
let apiTokenInstance = '69667fa351af432780a74bc820885e7eb3c8e78d70144789ba'

export interface IAuthUserData{
    idInstance:string
    apiTokenInstance:string
}

interface IInitialState{
    user:IAuthUserData
}

const initialState:IInitialState={
    user:{
        apiTokenInstance:apiTokenInstance,
        idInstance:idInstance
    }
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuthUser:(state,action:PayloadAction<IAuthUserData>)=>{
            state.user = action.payload
        },
        removeAuthUser:(state)=>{
            state.user = {
                apiTokenInstance:'',
                idInstance:''
            }
        }
    }
})

export default authSlice.reducer 

export const setAuthUser =(user:IAuthUserData)=>(dispatch:Dispatch)=>{
    try{
        const result = AuthApi.checkAuth(user.idInstance,user.apiTokenInstance)
        result.then(res=>console.log(res))
        dispatch(authSlice.actions.setAuthUser(user))
    }catch(e){
        console.log(e)
    }
    
}
export const removeAuthUser =()=>(dispatch:Dispatch)=>{
    dispatch(authSlice.actions.removeAuthUser())
}
