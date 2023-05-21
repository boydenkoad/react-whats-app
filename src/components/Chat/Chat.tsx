import { FC, useEffect, useState } from "react";
import { ChatApi } from "../../api/api";
import ChatForm from "./ChatForm/ChatForm";
import {IMassage} from "../../app/slices/chatSlice";
import ChatMessageList from "./ChatMessageList/ChatMessageList";
import ChatHeader from "./ChatHeader/ChatHeader";
import {useAppSelector} from "../../app/store";
import NumberForm from "../NumberForm/NumberForm";

import "./Chat.css";
import { useChat } from "./hooks/useChat";

const Chat: FC = () => {
  const [messages, setMessages] = useState<IMassage[]>([]);

  const { user } = useAppSelector((state) => state.authReducer);

  const {chatId,currentNumber,isActive,moduleValue,onChangeSetActive,onChangeSetChadId,onChangeSetModelWindow} = useChat()
  
  useEffect(() => {
    if(!chatId.length) return
      ChatApi.getMessagesOfChat(
        user.idInstance,
        user.apiTokenInstance,
        chatId
      ).then((res) => setMessages(res));
  }, [chatId]);

  console.log('render')

  // useEffect(()=>{
    // if(!chatId.length) return
      // setTimeout(()=>{
      //   try{
      //     ChatApi.getMessagesOfChat(
      //       user.idInstance,
      //       user.apiTokenInstance,
      //       chatId
      //     ).then((res) => setMessages(res));
      //     console.log('inteval')
      //   }catch(e){
          
      //     console.log(e)
      //   }
      
      // },10000)
  
      // return ()=> clearTimeout(timer)
    // }, []);

  return (
    <div className="Chat">
        <ChatHeader setActive={()=>onChangeSetActive(true)} number={currentNumber}/>
        <ChatMessageList messages={messages} />
        <ChatForm chatId={chatId}/>
        {isActive && <NumberForm value={moduleValue} onChange={onChangeSetModelWindow} onClickHandler={()=>onChangeSetChadId()}/>}
    </div>
  );
};
export default Chat;
