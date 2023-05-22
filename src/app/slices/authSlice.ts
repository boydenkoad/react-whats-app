import {PayloadAction, createSlice ,Dispatch} from "@reduxjs/toolkit";
import { AuthApi } from "../../api/api";



export interface IAuthUserData{
    idInstance:string
    apiTokenInstance:string
}

interface IInitialState{
    user:IAuthUserData
}

const initialState:IInitialState={
    user:{
        apiTokenInstance:localStorage.getItem('apiTokenInstance')||'',
        idInstance:localStorage.getItem('idInstance')||''
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
        result.then(res=>{

            if(res['stateInstance'] === 'authorized'){
                dispatch(authSlice.actions.setAuthUser(user))
                localStorage.setItem('apiTokenInstance',user.apiTokenInstance)
                localStorage.setItem('idInstance',user.idInstance)
            }
        })
        
    }catch(e){
        console.log(e)
    }
    
}
export const removeAuthUser =()=>(dispatch:Dispatch)=>{
    localStorage.removeItem('apiTokenInstance')
    localStorage.removeItem('idInstance')
    dispatch(authSlice.actions.removeAuthUser())
}
