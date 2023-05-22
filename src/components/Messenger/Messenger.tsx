import { FC, useState } from "react";
import ChatList from "../ChatList/ChatList";
import Chat from "../Chat/Chat";

import "./Messenger.css";
import NumberForm from "../NumberForm/NumberForm";
import { useChat } from "../Chat/hooks/useChat";

const Messenger: FC = () => {
  const {
    chatId,
    currentNumber,
    isActive,
    moduleValue,
    onChangeSetActive,
    onChangeSetChadId,
    onChangeSetModelWindow,
    chatList,
    onHandleLinkChange
  } = useChat();




  return (
    <div className="Messenger">
      <ChatList
        className="Messenger__chatList"
        chats={chatList}
        setActive={()=>onChangeSetActive(true)}
        setCurrentId={onHandleLinkChange}
      />
      <Chat
        className="Messenger__chat"
        chatId={chatId}
        currentNumber={currentNumber}
      />
      {isActive && (
        <NumberForm
          value={moduleValue}
          onChange={onChangeSetModelWindow}
          onClickHandler={() => onChangeSetChadId()}
        />
      )}
    </div>
  );
};
export default Messenger;
