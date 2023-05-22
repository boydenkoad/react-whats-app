import { useState } from "react";

export const useChat = () => {
  const [moduleValue, setModuleValue] = useState<string>("");
  const [currentNumber, setCurrentNumber] = useState<string>("");
  const [isActive, setActive] = useState<boolean>(false);
  const [chatId, setChatId] = useState<string>("");
  const [chatList, setChatList] = useState<{number:string,chatId:string}[]>([]);

  const getChatId = (value: string): string => {
    let result = [];
    for (let n of value) {
      if (
        n === "0" ||
        n === "1" ||
        n === "2" ||
        n === "3" ||
        n === "4" ||
        n === "5" ||
        n === "6" ||
        n === "7" ||
        n === "8" ||
        n === "9"
      ) {
        result.push(n);
      }
    }
    return `${result.join("")}@c.us`;
  };

  const onHandleLinkChange = (number:string,chatId:string)=>{
    setCurrentNumber(number)
    setChatId(chatId)
  }

  const onChangeSetModelWindow = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModuleValue(e.target.value);
  };

  const onChangeSetActive = (boolean: boolean) => {
    setActive(boolean);
  };

  const onChangeSetChadId = () => {

    setActive(false);

    const newChatId = getChatId(moduleValue);

    const checked = checkForList(moduleValue,newChatId,chatList)

    if(checked) return

    setCurrentNumber(moduleValue);

    setChatId(newChatId)

    setChatList(prev=>[handleSetChatList(moduleValue,newChatId),...prev])
  };

  const handleSetChatList = (number:string,chatId:string)=>{
    const newChat = {
        number:number,
        chatId:chatId
    }
    return newChat
  }

  function checkForList(number:string,chatId:string,chatList:{number:string,chatId:string}[]){
    if(!chatList.length) return false

    for(let i = 0; i< chatList.length;i++){

        if(chatList[i]['chatId'] === chatId || chatList[i]['number']===number){
            return true
        }
        else{
            return false
        }
    }
  }
  

  return {
    onChangeSetModelWindow,
    onChangeSetActive,
    onChangeSetChadId,
    moduleValue,
    isActive,
    chatId,
    currentNumber,
    getChatId,
    setChatList,
    chatList,
    onHandleLinkChange
  };
};
