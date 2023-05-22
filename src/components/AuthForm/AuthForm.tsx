import { FC, FormEvent, useState } from "react";
import {IAuthUserData, setAuthUser} from '../../app/slices/authSlice'
import './AuthForm.css'
import { useAppDispatch } from "../../app/store";

const AuthForm: FC = () => {

  const dispatch = useAppDispatch()
  
  const [apiTokenInstance,setApiTokenInstance] = useState('')
  const [idInstance,setIdInstance] = useState('')

  const onSubmit=(e:FormEvent)=>{
    
    e.preventDefault()
    const user:IAuthUserData = {
      apiTokenInstance:apiTokenInstance,
      idInstance:idInstance
    }
    dispatch(setAuthUser(user))
  }


  return (
    <form className="AuthForm" onSubmit={onSubmit}>
        <div className="AuthForm__field">
            <label>Id Instance</label>
            <input placeholder="Id Instance" value={idInstance} onChange={(e)=>setIdInstance(e.target.value)}/>
        </div>
        <div className="AuthForm__field">
            <label>Api Token Instance</label> 
            <input placeholder="Api Token Instance" value={apiTokenInstance} onChange={(e)=>setApiTokenInstance(e.target.value)}/>
        </div>
        <div className="AuthForm__Link">
          <a href="https://green-api.com/" target="_blank">GREEN API / авторизация</a>
        </div>
        <button className="AuthForm__btn">Авторизация</button>
    </form>
  );
};
export default AuthForm;
