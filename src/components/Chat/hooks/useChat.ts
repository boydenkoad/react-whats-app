import { useEffect, useState } from "react"
import { useAppSelector } from "../../../app/store"
import {IMassage} from '../../../app/slices/chatSlice'
import { ChatApi } from "../../../api/api"

export const useChat=()=>{

    const [moduleValue,setModuleValue] = useState<string>('')
    const [currentNumber,setCurrentNumber] = useState<string>('')
    const [isActive,setActive] = useState<boolean>(false)
    const [chatId,setChatId] = useState<string>('')

    const getChatId=(value:string)=>{
        let result = []
        for(let n of value){
            if(
                n === '0' ||
                n === '1' ||
                n === '2' ||
                n === '3' ||
                n === '4' ||
                n === '5' ||
                n === '6' ||
                n === '7' ||
                n === '8' ||
                n === '9'
            ){
                result.push(n)
            }
        }
        return `${result.join('')}@c.us`
    }

    const onChangeSetModelWindow= (e:React.ChangeEvent<HTMLInputElement>) =>{
        setModuleValue(e.target.value)
    }
    const onChangeSetActive = (boolean:boolean) =>{
        setActive(boolean)
    }
    const onChangeSetChadId = () =>{
        setActive(false)
        setCurrentNumber(moduleValue)
        setChatId(getChatId(moduleValue))
    }

    return {onChangeSetModelWindow,onChangeSetActive,onChangeSetChadId,moduleValue,isActive,chatId,currentNumber}
}