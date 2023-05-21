import { ChangeEvent, FC, useState } from "react";
import { sendMessage } from "../../../app/slices/chatSlice";

import "./ChatForm.css";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { ChatApi } from "../../../api/api";

interface ChatFrom {}

const ChatForm: FC<{chatId:string}> = ({chatId}) => {
  const dispatch = useAppDispatch()
  const [state, setState] = useState<string>("");
  const { apiTokenInstance, idInstance } = useAppSelector(
    (state) => state.authReducer.user
  );

  const handleSubmit = () => {
    dispatch(
      sendMessage(idInstance, apiTokenInstance, state, chatId)
    );
  };

  return (
    <div className="ChatFrom">
      <div className="ChatFrom__text">
        <textarea
          placeholder="Type a message"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className="ChatFrom__button">
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};
export default ChatForm;
