import { FC } from "react";

import "./message.css";
import cn from "classnames";
import { IMassage } from "../../../app/slices/chatSlice";

export interface IMessageProps extends IMassage {

}

let authUser = "11";

const Message: FC<{message:IMessageProps,classNames?:string}> = ({ message,classNames }) => {
  return (
    !message.textMessage ? null :
    <div className="Message__block">
    <p className={cn(
        message.type === "outgoing" ? "Message My__message" : "Message",
        classNames
      )}>{message.textMessage}</p>
    </div>
  );
};
export default Message;
