import React, { FC, useMemo } from "react";

import { IMassage } from "../../../app/slices/chatSlice";
import Message from "../Message/Message";

import "./ChatMessageList.css";

interface IChatMessageList {
  messages: IMassage[];
}

const ChatMessageList: FC<IChatMessageList> = React.memo(({ messages }) => {
  console.log('render')
  const messageList = messages
    .map((el) => (
      <Message
        key={el.idMessage}
        classNames="ChatMessageList__message"
        message={el}
      />
    ))
    .reverse();
  return <div className="ChatMessageList">{messageList}</div>;
});
export default ChatMessageList;
