import {redirect} from "react-router-dom"
import { useAppSelector } from "../store"


export const useRedirect=(url:string)=>{
    const {user} = useAppSelector(state=>state.authReducer)
    debugger
    if(user){
        return redirect(url)
    }
    return redirect('/login')
}
