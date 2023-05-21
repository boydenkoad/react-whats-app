import { FC, useState } from "react";
import InputMask from "react-input-mask";

import './NumberForm.css'

interface INumberForm{
  value:string
  onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>any
  onClickHandler:()=>void
}

const NumberForm: FC<INumberForm> = ({onClickHandler,onChange,value}) => {

  const getChatId=(value:string = '')=>{
      let result = []
      for(let n of value){
          if(
              n === '0' ||
              n === '1' ||
              n === '2' ||
              n === '3' ||
              n === '4' ||
              n === '5' ||
              n === '6' ||
              n === '7' ||
              n === '8' ||
              n === '9'
          ){
              result.push(n)
          }
      }
      return `${result.join('')}@c.us`
  }
  
  return (
    <div className="NumberForm">
      <div className="NumberForm__container">
        <InputMask
          mask={"+9 (999) 999 99 99"}
          className="NumberForm__input"
          value={value}
          onChange={onChange}
        />
      <button onClick={onClickHandler}>Отправить</button>
      </div>
      
    </div>
  );
};
export default NumberForm;
