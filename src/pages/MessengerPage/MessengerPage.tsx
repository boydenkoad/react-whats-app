import {FC} from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../app/store'
import Messenger from '../../components/Messenger/Messenger'

import './MessengerPage.css'

const MessengerPage: FC=()=>{
    const {apiTokenInstance,idInstance} = useAppSelector(state=>state.authReducer.user)

    if(!apiTokenInstance.length || !idInstance.length){
        return <Navigate to={'/login'}/>
    }

    return <div className='MessengerPage'>
        <Messenger/>
    </div>

}
export default MessengerPage