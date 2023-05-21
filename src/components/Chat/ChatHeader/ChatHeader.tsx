import {FC} from 'react'

import './ChatHeader.css'

interface IChatHeader{
    number:string,
    setActive:()=>void
}

const ChatHeader: FC<IChatHeader>=({number,setActive})=>{
    return <div className='ChatHeader'>
        <div className='ChatHeader__number'>{number}</div>
        <div>
        <button onClick={setActive}>Add</button>
        </div>
        
    </div>

}
export default ChatHeader