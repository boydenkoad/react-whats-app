import { ChangeEvent, FC, useState } from "react";

import "./ChatForm.css";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { ChatApi } from "../../../api/api";

interface IChatFrom {
  sendMessage:()=>void
  value:string
  onChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void
}

const ChatForm: FC<IChatFrom> = ({sendMessage,onChange,value}) => {

  return (
    <div className="ChatFrom">
      <div className="ChatFrom__text">
        <textarea
          placeholder="Type a message"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="ChatFrom__button">
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
};
export default ChatForm;
