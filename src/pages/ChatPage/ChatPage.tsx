import {FC} from 'react'
import Chat from '../../components/Chat/Chat'

import './ChatPage.css'
import { useAppSelector } from '../../app/store'
import { Navigate } from 'react-router-dom'

const ChatPage: FC=()=>{

    const {apiTokenInstance,idInstance} = useAppSelector(state=>state.authReducer.user)

    if(!apiTokenInstance.length || !idInstance.length){
        return <Navigate to={'/login'}/>
    }

    return <div className='ChatPage'><Chat/></div>

}
export default ChatPage