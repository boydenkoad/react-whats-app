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
    <div className="Message">
    <div className={cn(
        message.type === "outgoing" ? "Message__text My__message" : "Message__text",
        classNames
      )}>{message.textMessage}</div>
    </div>
  );
};
export default Message;
