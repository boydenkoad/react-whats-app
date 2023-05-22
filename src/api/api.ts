import axios from 'axios'


const instance = axios.create({
    baseURL:"https://api.green-api.com/"
})

export const AuthApi = {
    async checkAuth(idInstance:string,apiTokenInstance:string){
        const result = await instance.get(`/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
        return result.data
    }
}

export const ChatApi = {
    
    async getMessagesOfChat(idInstance:string,apiTokenInstance:string,chatId:string,count?:number){
        const result = await instance.post(`/waInstance${idInstance}/GetChatHistory/${apiTokenInstance}`,{chatId,count})
        // debugger
        return result.data
    },

    async LastOutgoingMessages (idInstance:string,apiTokenInstance:string){
        const result = await instance.get(`/waInstance${idInstance}/LastOutgoingMessages/${apiTokenInstance}`)
        return result.data
    },

    async sendMessage(idInstance:string,apiTokenInstance:string,message:string,chatId:string){
        const result = await instance.post(`/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,{chatId:chatId,message:message})
        return result.data
    },


    
}