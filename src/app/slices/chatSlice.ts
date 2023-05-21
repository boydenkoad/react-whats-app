import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChatApi } from "../../api/api";


export interface IMassage {
  chatId: string;
  idMessage: string;
  sendByApi: boolean;
  statusMessage: string;
  textMessage:string;
  timestamp: number;
  type: string;
  typeMessage: string;
}

interface IInitialState {
    messages:IMassage[]
    isLoading:boolean
    error:string
}

const initialState: IInitialState = {
    messages:[],
    isLoading:false,
    error:''
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    fetchMessage:(state)=>{
        state.isLoading = true
    },
    fetchMessageSuccess:(state,action)=>{
        state.isLoading = false
        state.error = ''
        state.messages = action.payload
    },
    sendMessage:(state,action)=>{
        state.messages.push(action.payload)
    }
  },
});


export default chatSlice.reducer



export const getMessage=(idInstance: string, apiTokenInstance: string, chatId: string, count?: number)=>(dispatch:Dispatch)=>{
    try{
        dispatch(chatSlice.actions.fetchMessage())
        const result = ChatApi.getMessagesOfChat(idInstance,apiTokenInstance,chatId,count)
        result.then(res=>dispatch(chatSlice.actions.fetchMessageSuccess(res)))
    }catch(e){
        console.log(e)
    }
    
}

export const sendMessage = (idInstance:string,apiTokenInstance:string,textMessage:string,chatId:string) =>(dispatch:Dispatch)=>{
    try{
        ChatApi.sendMessage(idInstance,apiTokenInstance,textMessage,chatId).then(
            res=>getMessage(idInstance,apiTokenInstance,chatId)
        )
        
    }catch(e){
        console.log(e)
    }
}