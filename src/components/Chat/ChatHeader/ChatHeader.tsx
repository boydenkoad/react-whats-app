import {FC} from 'react'
import vector from '../../../assets/images/vector.png'
import './ChatHeader.css'

interface IChatHeader{
    number:string,
    update:()=>void
}

const ChatHeader: FC<IChatHeader>=({number,update})=>{
    return <div className='ChatHeader'>
        <div className='ChatHeader__number'>{number}</div>
        <div className='ChatHeader__vector'>
            <button className='' onClick={update}><img src={vector} alt="" /></button>
        </div>
    </div>

}
export default ChatHeader