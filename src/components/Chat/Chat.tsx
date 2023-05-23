import { FC, useEffect, useState } from "react";
import { ChatApi } from "../../api/api";
import ChatForm from "./ChatForm/ChatForm";
import {IMassage} from "../../app/slices/chatSlice";
import ChatMessageList from "./ChatMessageList/ChatMessageList";
import ChatHeader from "./ChatHeader/ChatHeader";
import {useAppSelector} from "../../app/store";
import cn from 'classnames'

import "./Chat.css";

interface IChat{
  chatId:string,
  currentNumber:string
  className?:string
}

const Chat: FC<IChat> = ({className,currentNumber,chatId}) => {
  const [messages, setMessages] = useState<IMassage[]>([]);
  const [textMessage,setTextMessage] = useState<string>('')
  const { user } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if(!chatId.length) return

      ChatApi.getMessagesOfChat(
        user.idInstance,
        user.apiTokenInstance,
        chatId
      ).then((res) => setMessages(res))

  }, [chatId]);

  const updateMessagesHandle =()=>{
    if(!chatId.length) return

      ChatApi.getMessagesOfChat(
        user.idInstance,
        user.apiTokenInstance,
        chatId
      ).then((res) => setMessages(res));

  }

  const sendMessageHandle=()=>{

    if(!textMessage.length) return

    const createMessage = {
      chatId: chatId,
      idMessage: new Date().toString(),
      sendByApi: true,
      statusMessage: 'any',
      textMessage:textMessage,
      timestamp: 20,
      type: 'outgoing',
      typeMessage: 'any'
    }
    ChatApi.sendMessage(user.idInstance,user.apiTokenInstance,textMessage,chatId)

    setMessages(prev=>[createMessage,...prev])
    setTextMessage('')
  }



  return (
    <div className={cn('Chat',className)}>
      {chatId ?
        <>
          <ChatHeader  number={currentNumber} update={updateMessagesHandle}/>
          <ChatMessageList messages={messages} />
          <ChatForm  value={textMessage} onChange={e=>setTextMessage(e.target.value)} sendMessage={sendMessageHandle}/>
        </>

      :<div className="chat__empty">Создайте чат</div>}
    </div>
  );
};
export default Chat;
