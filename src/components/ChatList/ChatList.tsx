import React, { FC } from "react";
import cn from "classnames";
import { removeAuthUser } from "../../app/slices/authSlice";
import "./ChatList.css";
import { useAppDispatch } from "../../app/store";

interface IChat {
  number: string;
  chatId: string;
}

interface IChatList {
  chats: IChat[];
  className?: string;
  setCurrentId: (number: string, chatId: string) => void;
  setActive: () => void;
}

const ChatList: FC<IChatList> = React.memo(
  ({ chats, className, setCurrentId, setActive }) => {

    const dispatch = useAppDispatch();

    const handleLogOut = () =>{
        dispatch(removeAuthUser())
    }

    const list = chats.map((el) => (
      <li key={el.chatId}
        onClick={() => setCurrentId(el.number, el.chatId)}
        className="ChatList__list__element"
      >
        {el.number}
      </li>
    ));

    

    return (
      <div className={cn("ChatList", className)}>
        <div className="ChatList__buttons">
          <button onClick={setActive}>Создать чат</button>
          <button onClick={handleLogOut}>Выход</button>
        </div>
        <ul className="ChatList__list">{list}</ul>
      </div>
    );
  }
);
export default ChatList;
